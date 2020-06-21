import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Employee } from '../../shared/models/employee.model';
import { Gender } from '../../shared/models/gender.model';
import { EmployeesFormConfig } from '../../shared/configs/employees-form-config';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFormService {
  constructor(protected eployeesFormConfig: EmployeesFormConfig) {}

  getEmployeeForm() {
    return this.eployeesFormConfig.getForm();
  }

  // createEmployeeInfoForm(data: Employee) {
  //   data = data ? data : new Employee();
  //   this.form = this.fb.group({
  //     uuid: data.uuid ? data.uuid : '',
  //     fullName: data.fullName ? data.fullName : '',
  //     dob: data.dob ? data.dob : Date.now(),
  //     age: data.age ? data.age : '',
  //     phone: data.phone ? data.phone : '',
  //     gender: data.gender ? data.gender : Gender.M,
  //     email: data.email ? data.email : '',
  //     department: data.department ? data.department : '',
  //     avatar: data.avatar ? data.avatar : '',
  //   });
  // }

  setEmployeeForm() {}

  resetEmployeeForm() {
    this.eployeesFormConfig.resetForm();
  }
}
