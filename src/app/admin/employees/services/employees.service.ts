import { Injectable } from '@angular/core';
import { EmployeesFormService } from '../../providers/services/employees/employees-form.service';
import { EmployeeUI } from '../../providers/models/employee-ui.model';
import { EmployeesApiService } from '../../providers/services/employees/employees-api.service';
import { FormDialogService } from '../../shared/services/form-dialog.service';
import { EmployeesFormComponent } from '../components/employees-form/employees-form.component';
import * as _ from 'lodash';
import { UtilitiesService } from '../../shared/services/utilities.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationsService } from '../../shared/services/validations.service';
import { Gender } from '../../providers/enum/gender.enum';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(
    protected fb: FormBuilder,
    protected employeesFormService: EmployeesFormService,
    protected employeesApiService: EmployeesApiService,
    protected formDialogService: FormDialogService,
    protected utilitiesService: UtilitiesService,
    protected validationsService: ValidationsService
  ) {}
  ///////////////////////DIALOG///////////////////////

  openEmployeesFormDialog(data?: EmployeeUI) {
    this.formDialogService
      .openFormDialog(EmployeesFormComponent, data)
      .afterClosed()
      .subscribe(() => {
        this.resetEmployeeForm();
      });
  }

  ///////////////////////FORM///////////////////////

  getEmployeeForm() {
    return this.employeesFormService.getForm();
  }

  setEmployeeForm() {}

  resetEmployeeForm() {
    this.employeesFormService.resetForm();
  }

  generateEmployeeFormAndDefaultFormData(data: EmployeeUI) {
    const form = this.fb.group({
      id: [(data && data.id) || ''],
      fullName: [
        (data && data.fullName) || '',
        [Validators.required, Validators.maxLength(30), Validators.minLength(4)],
      ],
      dob: [(data && data.dob) || '', [Validators.required, this.validationsService.invalidDate]],
      age: [{ value: (data && data.age) || null, disabled: true }],
      phone: [
        (data && data.phone) || '',
        [Validators.required, this.validationsService.maxLengthWithNumber(10, 'phone')],
      ],
      gender: [(data && data.gender) || Gender.M],
      email: [(data && data.email) || '', [Validators.required, Validators.email]],
      department: [(data && data.department) || ''],
      password: [(data && data.password) || ''],
      confirmPassword: [
        (data && data.password) || '',
        [Validators.required, this.validationsService.invalidConfirmPassword()],
      ],
      avatar: [(data && data.avatar) || ''],
    });

    this.employeesFormService.generateForm(form);
  }

  getEmployeesFormValue() {
    this.employeesFormService.getFormValue();
  }

  ///////////////////////API///////////////////////

  createEmployee(data: any) {
    data.id = data.id || this.utilitiesService.createId();
    return this.employeesApiService.callAPIToCreateEmployee(data);
  }

  updateEmployee(data: any) {
    return this.employeesApiService.callAPIToUpdateEmployee(data);
  }

  fetchAllEmployees() {
    return this.employeesApiService.callAPIToFetchEmployees();
  }

  fetchAllEmployeesWithParams() {
    const query: string = '';
    return this.employeesApiService.callAPIToFetchEmployees(query);
  }

  fetchEmployeeByID(id: string) {
    return this.employeesApiService.callAPIToFetchEmployee(id);
  }

  deleteEmployee(data: any) {
    return this.employeesApiService.callAPIToDeleteEmployee(data);
  }
}
