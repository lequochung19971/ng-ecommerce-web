import { Injectable } from '@angular/core';
import { EmployeesFormService } from '../../providers/services/employees/employees-form.service';
import { EmployeeUI } from '../../providers/models/employee-ui.model';
import { EmployeesApiService } from '../../providers/services/employees/employees-api.service';
import { FormDialogService } from '../../shared/services/form-dialog.service';
import { EmployeesFormComponent } from '../components/employees-form/employees-form.component';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import { UtilitiesService } from '../../shared/services/utilities.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(
    protected employeesFormService: EmployeesFormService,
    protected employeesApiService: EmployeesApiService,
    protected formDialogService: FormDialogService,
    protected utilitiesService: UtilitiesService
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

  generateEmployeeFormAndDefaultFormData(data: EmployeeUI) {
    this.employeesFormService.generateForm(data);
    this.employeesFormService.generateFormDefaultData();
  }

  setEmployeeForm() {}

  resetEmployeeForm() {
    this.employeesFormService.resetForm();
  }

  getEmployeesFormData() {
    this.employeesFormService.getFormData();
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
