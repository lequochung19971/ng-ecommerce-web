import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthorsFormService {
  private form = new FormGroup({
    uuid: new FormControl(null),
    fullName: new FormControl(''),
    dob: new FormControl(''),
    description: new FormControl(''),
  });

  constructor() {}

  getAuthorForm() {
    return this.form;
  }
}
