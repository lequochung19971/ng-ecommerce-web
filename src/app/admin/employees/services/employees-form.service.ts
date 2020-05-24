import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Gender } from '../../models/gender.model';
import { Employee } from '../../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFormService {
  private form;
  private formValue;

  constructor(private fb: FormBuilder) {}

  getEmployeeInfoForm() {
    return this.form;
  }

  createEmployeeInfoForm(data: Employee) {
    data = data ? data : new Employee();
    this.form = this.fb.group({
      uuid: data.uuid ? data.uuid : '',
      fullName: data.fullName ? data.fullName : '',
      dob: data.dob ? data.dob : Date.now(),
      age: data.age ? data.age : '',
      phone: data.phone ? data.phone : '',
      gender: data.gender ? data.gender : Gender.M,
      email: data.email ? data.email : '',
      department: data.department ? data.department : '',
      avatar: data.avatar ? data.avatar : '',
    });
  }

  createEmployee() {
    console.log(this.form);
  }
}
