import { Injectable } from '@angular/core';
import {
  StrongAndWeakPasswordModel,
  WeakPasswordModel,
} from '../models/strong-weak-password.model';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private passwordMeter: StrongAndWeakPasswordModel;
  constructor() {}

  get passwordMeterInfo() {
    return this.passwordMeter;
  }

  calculatePasswordMeter(value: string, barWidth: number): StrongAndWeakPasswordModel {
    const weakness = this.weakPasswords(value) as WeakPasswordModel[];
    const percent = this.calculatePasswordStrengthPercent(weakness) as number;

    this.passwordMeter = {
      width: String((barWidth * percent) / 100),
      percent,
      weakness,
    };

    return this.passwordMeter;
  }

  calculatePasswordStrengthPercent(weakness: WeakPasswordModel[]) {
    let strenghPercent: number = 100;

    weakness.forEach((data) => {
      if (!data) {
        return;
      }
      strenghPercent -= data.deduction;
    });

    return strenghPercent;
  }

  weakPasswords(password: string): WeakPasswordModel[] {
    const meter = [];
    meter.push(this.stringLength(password));
    meter.push(this.lowerLetters(password));
    meter.push(this.upperLetters(password));
    meter.push(this.numberLetters(password));
    meter.push(this.specialLetters(password));

    return meter;
  }

  protected stringLength(password: string): WeakPasswordModel {
    const { length } = password;

    if (length <= 5) {
      return {
        message: 'Your password is too short',
        deduction: 40,
      };
    }

    if (length <= 10) {
      return {
        message: 'Your password could be longer',
        deduction: 15,
      };
    }
  }

  protected repeatLetters(password: string): WeakPasswordModel {
    const { length } = password.match(/(.)\1/g) || [];
    if (length > 0) {
      return {
        message: 'Your password has repeat characters',
        deduction: length * 10,
      };
    }
  }

  protected lowerLetters(password: string): WeakPasswordModel {
    const regex: RegExp = /[a-z]/g;
    const type: string = 'lowercase characters';
    return this.checkCharacterType({ password, regex, type });
  }

  protected upperLetters(password: string): WeakPasswordModel {
    const regex: RegExp = /[A-Z]/g;
    const type: string = 'uppercase characters';
    return this.checkCharacterType({ password, regex, type });
  }

  protected numberLetters(password: string): WeakPasswordModel {
    const regex: RegExp = /[0-9]/g;
    const type: string = 'number';
    return this.checkCharacterType({ password, regex, type });
  }

  protected specialLetters(password: string): WeakPasswordModel {
    const regex: RegExp = /[$-/:-?{-~!"^_@`\[\]]/g;
    const type: string = 'special characters';
    return this.checkCharacterType({ password, regex, type });
  }

  protected checkCharacterType({ password, regex, type }): WeakPasswordModel {
    const { length } = password.match(regex) || [];

    if (length === 0) {
      return {
        message: `Your password has no ${type}`,
        deduction: 20,
      };
    }

    if (length <= 2) {
      return {
        message: ` Your password could use more ${type}`,
        deduction: 5,
      };
    }
  }
}
