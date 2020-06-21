import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor() {}

  calculateAgeFromDOB(date) {
    let age: number;
    if (date) {
      const dobMomentJS = moment(date, 'DD/MM/YYYY');

      if (dobMomentJS.isValid()) {
        age = moment().diff(dobMomentJS, 'years', false);
      } else {
        age = null;
      }
    }

    return age;
  }

  convertDOBObjectToDOBString(date) {}
}
