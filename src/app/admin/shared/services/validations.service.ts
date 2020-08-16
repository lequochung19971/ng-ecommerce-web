import { Injectable } from '@angular/core';
import { FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class ValidationsService {
  constructor() {}

  invalidDate(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      const dobMomentJS = moment(control.value, 'DD/MM/YYYY');

      if (!dobMomentJS.isValid() || control.value.length < 10) {
        return { invalidDate: true };
      }
    }

    return null;
  }

  maxLengthWithNumber(max: number, fieldName: string): ValidationErrors | null {
    return (control: AbstractControl) => {
      if (control.value && control.value.length > max) {
        return { maxLengthWithNumberAndFieldName: { fieldName, max } };
      }

      return null;
    };
  }
}
