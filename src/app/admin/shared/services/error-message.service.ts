import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorParams } from '../../providers/models/error-params.model';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  constructor(protected translateService: TranslateService) {}

  messages(valueInsideError: ErrorParams): object {
    return {
      invalidDate: this.showMessage('invalidDate'),
      required: this.showMessage('required'),
      maxLength: this.showMessage('maxLength'),
      minLength: this.showMessage('minLength'),
      email: this.showMessage('invalidEmail'),
      maxLengthWithNumberAndFieldName: this.showMessage('maxLengthOfFieldName', {
        fieldName: valueInsideError['fieldName'],
        max: valueInsideError['max'],
      }),
      invalidPassword: this.showMessage('invalidPassword'),
      invalidConfirmPassword: this.showMessage('invalidConfirmPassword'),
    };
  }

  getErrorMessage(valueInsideError: ErrorParams, errorName: string): string {
    return this.messages(valueInsideError)[errorName];
  }

  showMessage(key: string, params?: object): string {
    return this.translateService.instant(key, params);
  }
}
