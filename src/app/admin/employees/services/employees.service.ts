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

  deleteEmployee(uuid: String) {
    console.log(uuid);
  }

  createEmployee(data: any) {
    this.employeesApiService.callAPIToCreateCustomer(data);
  }

  updateEmployee(data: any) {}

  fetchEmployees(uuid: String) {}

  fetchEmployee() {}
}
