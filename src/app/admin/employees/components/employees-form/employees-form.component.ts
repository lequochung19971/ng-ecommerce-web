import { Component, OnInit, Input, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { EmployeesService } from '../../services/employees.service';
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';

import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faFemale } from '@fortawesome/free-solid-svg-icons';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilitiesService } from 'src/app/admin/shared/services/utilities.service';
import { Departments } from 'src/app/admin/providers/enum/departments.enum';
import { EmployeesFormService } from 'src/app/admin/providers/services/employees/employees-form.service';
import { EmployeeUI } from 'src/app/admin/providers/models/ui-employee.model';
import { ProxyService } from 'src/app/admin/providers/services/proxy/proxy.service';
import { Gender } from 'src/app/admin/providers/enum/gender.enum';
import { Employee } from 'src/app/admin/providers/models/employee.model';
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
  imgSrc: string;
  selectedImage: any;

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
    @Inject(MAT_DIALOG_DATA) public data: EmployeeUI,
    protected breakpointObserver: BreakpointObserver,
    protected employeesService: EmployeesService,
    protected utilitiesService: UtilitiesService,
    protected proxy: ProxyService
  ) {}

  ngOnInit(): void {
    this.employeesService.generateEmployeeFormAndDefaultFormData(this.data);
    this.form = this.employeesService.getEmployeeForm();
    // const objData: any = {
    //   uuid: '123456789',
    //   fullName: 'Le Quoc Hung',
    //   dob: '12/03/1997',
    //   age: 23,
    //   phone: '0329442883',
    //   gender: Gender.M,
    //   email: 'lequochung19971@gmail.com',
    //   department: Departments.DIRECTOR,
    //   password: '123456789',
    //   avatar: '',
    // };
    // this.proxy.post(Employee, objData).subscribe((data) => console.log(data));
  }

  onSubmit(): void {
    console.log('on submit');
  }

  changeDate() {
    const dateOfBirthForm = this.form.controls.dob;
    this.updateAge(dateOfBirthForm.value);
  }

  updateAge(date) {
    const calculatedAge = this.utilitiesService.calculateAgeFromDOB(date);
    this.form.controls.age.patchValue(calculatedAge);
  }

  ngOnDestroy(): void {
    this.employeesService.resetEmployeeForm();
  }
}
