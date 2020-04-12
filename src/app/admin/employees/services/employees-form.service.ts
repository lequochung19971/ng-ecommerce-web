import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFormService {
  private form = new FormGroup({
    uuid: new FormControl(null),
    fullName: new FormControl(''),
    dob: new FormControl(''),
    age: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl('M'),
    email: new FormControl(''),
    department: new FormControl(''),
    avatar: new FormControl(''),
  });

  constructor() {}

  getEmployeeForm() {
    return this.form;
  }
}
