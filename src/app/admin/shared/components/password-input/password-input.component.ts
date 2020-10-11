import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  ProgressLayoutModel,
  StrongAndWeakPasswordModel,
} from '../../models/strong-weak-password.model';
import { PasswordService } from '../../services/password.service';
import { ValidationsService } from '../../services/validations.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() fieldID: string;
  @Input() disabled: boolean = false;

  errorColor: string = '#EB5757';
  warningColor: string = '#FFC107';
  successColor: string = '#4CAF50';

  bar: HTMLElement;
  progress: HTMLElement;
  icon: HTMLElement;

  barID: string;
  progressID: string;
  iconID: string;

  showIcon: string;
  groupOfStatus: string[] = ['error', 'warning', 'success'];
  passwordMeter: StrongAndWeakPasswordModel = new StrongAndWeakPasswordModel();
  constructor(
    protected passwordService: PasswordService,
    protected validationsService: ValidationsService
  ) {}

  ngOnChanges(_changes: SimpleChanges): void {
    this.barID = `lqh-bar-${this.fieldID}`;
    this.progressID = `lqh-progress-${this.fieldID}`;
    this.iconID = `lqh-icon-${this.fieldID}`;
  }

  ngOnInit(): void {
    this.control.setValidators([this.validationsService.invalidPassword()]);
  }

  ngAfterViewInit(): void {
    this.bar = document.getElementById(this.barID);
    this.progress = document.getElementById(this.progressID);
    this.icon = document.getElementById(this.iconID);

    if (!this.disabled) {
      this.setProgressBarDefault();
      this.controlValueChange();
    }
  }

  protected controlValueChange(): void {
    this.control.valueChanges.subscribe((value) => {
      if (value === null || value === undefined) {
        return;
      }

      this.changeProgressBarStatus(value);
    });
  }

  protected changeProgressBarStatus(value: string) {
    this.passwordMeter = this.passwordService.calculatePasswordMeter(
      value,
      this.bar.clientWidth
    ) as StrongAndWeakPasswordModel;
    if (this.passwordMeter.percent < 40) {
      this.error(this.passwordMeter.width);
    } else if (this.passwordMeter.percent >= 40 && this.passwordMeter.percent < 75) {
      this.warning(this.passwordMeter.width);
    } else if (this.passwordMeter.percent >= 75) {
      this.success(this.passwordMeter.width);
    }
  }

  protected setProgressBarDefault(): void {
    this.setLayoutProgress({ width: '0', color: this.warningColor, status: 'warning' });
    this.changeProgressBarStatus(this.control.value);
  }

  protected success(width: string): void {
    this.setLayoutProgress({ width, color: this.successColor, status: 'success' });
  }

  protected error(width: string): void {
    this.setLayoutProgress({ width, color: this.errorColor, status: 'error' });
  }

  protected warning(width: string): void {
    this.setLayoutProgress({ width, color: this.warningColor, status: 'warning' });
  }

  protected setLayoutProgress(layout: ProgressLayoutModel): void {
    this.progress.style.width = `${+layout.width < 0 ? '0' : layout.width}px`;
    this.progress.style.backgroundColor = layout.color;
    this.showIcon = layout.status;
  }
}
