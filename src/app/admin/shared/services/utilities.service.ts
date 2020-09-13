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

  createid(): string {
    const date = new Date().getTime();
    const id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char: string) => {
      const random = (date + Math.random() * 16) % 16 | 0;
      return (char === 'x' ? random : (random & 0x3) | 0x8).toString(16);
    });

    return id;
  }
}
