import { Injectable } from '@angular/core';
import { EmployeesFormService } from '../../providers/services/employees/employees-form.service';
import { EmployeeFE } from '../../providers/models/employee-fe.model';
import { EmployeesApiService } from '../../providers/services/employees/employees-api.service';
import { FormDialogService } from '../../shared/services/form-dialog.service';
import { EmployeesFormComponent } from '../components/employees-form/employees-form.component';
import * as _ from 'lodash';
import { UtilitiesService } from '../../shared/services/utilities.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationsService } from '../../shared/services/validations.service';
import { Gender } from '../../providers/enum/gender.enum';
import { EmployeeBE } from '../../providers/models/employee.model';
import { Observable, Subject } from 'rxjs';
import { EmployeeTableParams } from '../../providers/models/employee-table-params';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { DataResponse } from '../../providers/interface/data-response.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  protected employees$: Subject<EmployeeFE[]> = new Subject<EmployeeFE[]>();
  protected employeesTableData$: Subject<EmployeeFE[]> = new Subject<EmployeeFE[]>();
  protected refreshData$: Subject<boolean> = new Subject<boolean>();
  protected employeesTableDataLength: number;
  protected currentEmployeeDialog: any;

  constructor(
    protected fb: FormBuilder,
    protected employeesFormService: EmployeesFormService,
    protected employeesApiService: EmployeesApiService,
    protected formDialogService: FormDialogService,
    protected utilitiesService: UtilitiesService,
    protected validationsService: ValidationsService
  ) {}

  get refreshData() {
    return this.refreshData$.asObservable();
  }

  ///////////////////////DIALOG///////////////////////

  getCurrentEmployeesDialog(): MatDialogRef<EmployeeFE> {
    return this.currentEmployeeDialog;
  }

  openEmployeesFormDialog(data?: EmployeeFE) {
    this.currentEmployeeDialog = this.formDialogService.openFormDialog(
      EmployeesFormComponent,
      data
    );

    this.currentEmployeeDialog.afterClosed().subscribe((res) => {
      this.resetEmployeeForm();
      if (res) {
        this.refreshData$.next(true)
      }
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

  generateEmployeeFormAndDefaultFormData(data: EmployeeFE) {
    const form = this.fb.group({
      _id: [(data && data._id) || ''],
      fullName: [
        (data && data.fullName) || '',
        [Validators.required, Validators.maxLength(30), Validators.minLength(4)],
      ],
      dob: [(data && data.dob) || '', [Validators.required, this.validationsService.invalidDate]],
      age: [(data && data.age) || null],
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

  getEmployeeFormValue() {
    return this.employeesFormService.getFormValue();
  }

  //////////////////////TABLE//////////////////////

  getEmployeesTableData(): Observable<EmployeeFE[]> {
    return this.employeesTableData$.asObservable();
  }

  getEmployeesTableDataLength(): number {
    return this.employeesTableDataLength;
  }

  setEmployeesTableData(params?): void {
    this.employeesApiService.callAPIToFetchEmployeesForTable(params).subscribe((res) => {
      this.employeesTableData$.next(res.data);
      this.employeesTableDataLength = res.totalCount;
    });
  }

  ///////////////////////API///////////////////////

  createEmployee(data: EmployeeFE): Observable<EmployeeFE> {
    const newEmployee: EmployeeBE = this.convertEmployeeFEToEmployeeBE(data);
    return this.employeesApiService.callAPIToCreateEmployee(newEmployee).pipe(
      map((res: DataResponse) => { return this.convertEmployeeBEToEmployeeFE(res.DATA) })
    );
  }

  updateEmployee(data: any) {
    return this.employeesApiService.callAPIToUpdateEmployee(data).pipe(
      map((res: DataResponse) => { return this.convertEmployeeBEToEmployeeFE(res.DATA) })
    );
  }

  fetchEmployeeByID(id: string) {
    return this.employeesApiService.callAPIToFetchEmployee(id);
  }

  deleteEmployee(data: any) {
    return this.employeesApiService.callAPIToDeleteEmployee(data);
  }

  convertEmployeeBEToEmployeeFE(employeeData: EmployeeBE) {
    return new EmployeeFE(employeeData);
  }

  convertEmployeeFEToEmployeeBE(employeeData: EmployeeFE) {
    return new EmployeeBE(employeeData);
  }
}
