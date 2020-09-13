import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomersFormService {
  private form = new FormGroup({
    id: new FormControl(null),
    fullName: new FormControl(''),
    dob: new FormControl(''),
    age: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl('M'),
    email: new FormControl(''),
    avatar: new FormControl(''),
    address: new FormControl(''),
  });

  constructor() {}

  getCustomerForm() {
    return this.form;
  }
}
