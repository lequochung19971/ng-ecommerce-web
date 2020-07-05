import { Injectable } from '@angular/core';
import { EmployeesFormService } from '../../providers/services/employees/employees-form.service';
import { EmployeeUI } from '../../providers/models/ui-employee.model';
import { EmployeesApiService } from '../../providers/services/employees/employees-api.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(
    protected employeesFormService: EmployeesFormService,
    protected employeesApiService: EmployeesApiService
  ) {}

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
    return this.employeesApiService.callAPIToCreateEmployee(data);
  }

  updateEmployee(data: any) {
    return this.employeesApiService.callAPIToUpdateEmployee(data);
  }

  fetchEmployees() {
    return this.employeesApiService.callAPIToFetchEmployees();
  }

  fetchEmployee(uuid: string) {
    const query = `uuid=${uuid}`;
    return this.employeesApiService.callAPIToFetchEmployees(uuid);
  }

  deleteEmployee(data: any) {
    return this.employeesApiService.callAPIToDeleteEmployee(data);
  }
}
