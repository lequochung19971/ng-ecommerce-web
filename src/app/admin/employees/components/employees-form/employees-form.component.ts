import { Component, OnInit, Input, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { EmployeesFormService } from '../../services/employees-form.service';
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';

import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faFemale } from '@fortawesome/free-solid-svg-icons';
import { Departments } from 'src/app/admin/models/departments.model';
import { Employee } from 'src/app/admin/models/employee.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss'],
})
export class EmployeesFormComponent implements OnInit {
  form: FormGroup;
  departments = _.values(Departments);
  maleIcon = faMale;
  femaleIcon = faFemale;

  // grids = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         {
  //           text: 'Full Name',
  //           cols: 12,
  //           rows: 1,
  //           color: 'lightblue',
  //         },
  //         { text: 'Last Name', cols: 12, rows: 1, color: 'lightgreen' },
  //         { text: 'Date of birth', cols: 12, rows: 1, color: 'lightpink' },
  //         { text: 'Age', cols: 12, rows: 1, color: '#DDBDF1' },
  //         { text: 'Phone', cols: 12, rows: 1, color: 'lightblue' },
  //         { text: 'Gender', cols: 12, rows: 1, color: 'lightgreen' },
  //         { text: 'Email', cols: 12, rows: 1, color: 'lightpink' },
  //         { text: 'Department', cols: 12, rows: 1, color: '#DDBDF1' },
  //       ];
  //     }
  //     // return [
  //     //   { text: 'Full Name', cols: 6, rows: 1, color: 'lightblue' },
  //     //   { text: 'Last Name', cols: 6, rows: 1, color: 'lightgreen' },
  //     //   { text: 'Date of birth', cols: 6, rows: 1, color: 'lightpink' },
  //     //   { text: 'Age', cols: 6, rows: 1, color: '#DDBDF1' },
  //     //   { text: 'Phone', cols: 6, rows: 1, color: 'lightblue' },
  //     //   { text: 'Gender', cols: 6, rows: 1, color: 'lightgreen' },
  //     //   { text: 'Email', cols: 6, rows: 1, color: 'lightpink' },
  //     //   { text: 'Department', cols: 6, rows: 1, color: '#DDBDF1' }
  //     // ];
  //   })
  // );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    protected breakpointObserver: BreakpointObserver,
    protected employeesFormService: EmployeesFormService
  ) {}

  ngOnInit(): void {
    console.log('Employee Component:' + this.data);
    this.data = this.data ? this.data : new Employee();
    this.employeesFormService.createEmployeeInfoForm(this.data);
    this.form = this.employeesFormService.getEmployeeInfoForm();
  }

  removeImage(image) {
    console.log(image);
  }

  onSubmit() {
    this.employeesFormService.createEmployee();
    console.log(this.form);
  }

  onCancel() {}
}
