import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class ValidationsService {
  constructor() {}

  invalidDate(control: FormControl) {
    if (control.value) {
      const dobMomentJS = moment(control.value, 'DD/MM/YYYY');

      if (!dobMomentJS.isValid()) {
        return { invalidDate: true };
      }
    }

    return null;
  }
}
