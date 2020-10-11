import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';
import { EmployeesFormService } from '../../providers/services/employees/employees-form.service';
import { PasswordService } from './password.service';

@Injectable({
  providedIn: 'root',
})
export class ValidationsService {
  constructor(
    protected passwordService: PasswordService,
    protected employeesFormService: EmployeesFormService
  ) {}

  invalidDate(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      const dobMomentJS = moment(control.value, 'DD/MM/YYYY');

      if (!dobMomentJS.isValid() || control.value.length < 10) {
        return { invalidDate: true };
      }
    }

    return null;
  }

  maxLengthWithNumber(max: number, fieldName: string): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value && control.value.length > max) {
        return { maxLengthWithNumberAndFieldName: { fieldName, max } };
      }

      return null;
    };
  }

  invalidPassword(): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value) {
        const weakness = this.passwordService.weakPasswords(control.value);
        const strengthPercent = this.passwordService.calculatePasswordStrengthPercent(weakness);

        if (strengthPercent < 75) {
          return { invalidPassword: true };
        }
      }

      return null;
    };
  }

  invalidConfirmPassword(): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value) {
        const password = this.employeesFormService.getFormControlWithProperty('password');
        return password && password.value !== control.value
          ? { invalidConfirmPassword: true }
          : null;
      }

      return null;
    };
  }
}
