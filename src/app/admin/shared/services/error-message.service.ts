import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  constructor() {}

  getErrorMessage(control: FormControl) {
    if (control.hasError('invalidDate')) {
      return 'Invalid Date';
    }
  }
}
