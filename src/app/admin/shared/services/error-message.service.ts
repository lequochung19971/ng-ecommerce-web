import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  constructor() {}

  get messages() {
    return {
      invalidDate: 'Invalid Date',
      required: 'Required',
    };
  }

  getErrorMessage(errorName: string) {
    return this.messages[errorName];
  }
}
