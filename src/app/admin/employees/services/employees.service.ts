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
  ) { }

  ///////////////////////FORM///////////////////////

  getEmployeeForm() {
    return this.employeesFormService.getForm();
  }

  generateEmployeeFormAndDefaultFormData(data: EmployeeUI) {
    this.employeesFormService.generateForm(data);
    this.employeesFormService.generateFormDefaultData();
  }

  setEmployeeForm() { }

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

  fetchAllEmployees() {
    return this.employeesApiService.callAPIToFetchEmployees();
  }

  fetchAllEmployeesWithParams() {
    const query: string = '';
    return this.employeesApiService.callAPIToFetchEmployees(query);
  }

  fetchEmployeeByID(uuid: string) {
    return this.employeesApiService.callAPIToFetchEmployee(uuid);
  }

  deleteEmployee(data: any) {
    return this.employeesApiService.callAPIToDeleteEmployee(data);
  }
}
