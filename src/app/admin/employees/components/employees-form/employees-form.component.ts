import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { EmployeesFormService } from '../../services/employees-form.service';
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';

import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faFemale } from '@fortawesome/free-solid-svg-icons';
import { Departments } from 'src/app/admin/models/departments.model';
@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss'],
})
export class EmployeesFormComponent implements OnInit {
  employeeForm: FormGroup;
  departments = _.values(Departments);

  faMale = faMale;
  faFemale = faFemale;

  grids = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            text: 'Full Name',
            cols: 12,
            rows: 1,
            color: 'lightblue',
          },
          { text: 'Last Name', cols: 12, rows: 1, color: 'lightgreen' },
          { text: 'Date of birth', cols: 12, rows: 1, color: 'lightpink' },
          { text: 'Age', cols: 12, rows: 1, color: '#DDBDF1' },
          { text: 'Phone', cols: 12, rows: 1, color: 'lightblue' },
          { text: 'Gender', cols: 12, rows: 1, color: 'lightgreen' },
          { text: 'Email', cols: 12, rows: 1, color: 'lightpink' },
          { text: 'Department', cols: 12, rows: 1, color: '#DDBDF1' },
        ];
      }
      // return [
      //   { text: 'Full Name', cols: 6, rows: 1, color: 'lightblue' },
      //   { text: 'Last Name', cols: 6, rows: 1, color: 'lightgreen' },
      //   { text: 'Date of birth', cols: 6, rows: 1, color: 'lightpink' },
      //   { text: 'Age', cols: 6, rows: 1, color: '#DDBDF1' },
      //   { text: 'Phone', cols: 6, rows: 1, color: 'lightblue' },
      //   { text: 'Gender', cols: 6, rows: 1, color: 'lightgreen' },
      //   { text: 'Email', cols: 6, rows: 1, color: 'lightpink' },
      //   { text: 'Department', cols: 6, rows: 1, color: '#DDBDF1' }
      // ];
    })
  );

  constructor(
    protected breakpointObserver: BreakpointObserver,
    protected employeesFormService: EmployeesFormService
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.employeesFormService.getEmployeeForm();
  }
}
