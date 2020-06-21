import { Component, OnInit, Input, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { EmployeesFormService } from '../../services/employees-form.service';
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';

import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faFemale } from '@fortawesome/free-solid-svg-icons';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Departments } from 'src/app/admin/shared/models/departments.model';
import { Employee } from 'src/app/admin/shared/models/employee.model';
import { UtilitiesService } from 'src/app/admin/shared/services/utilities.service';
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
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    protected breakpointObserver: BreakpointObserver,
    protected employeesFormService: EmployeesFormService,
    protected utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.form = this.employeesFormService.getEmployeeForm();
  }

  onSubmit(): void {
    console.log(this.form);
  }

  changeDate() {
    const dateOfBirthForm = this.form.controls.dob;
    this.updateAge(dateOfBirthForm.value);
  }

  updateAge(date) {
    const calculatedAge = this.utilitiesService.calculateAgeFromDOB(date);
    this.form.controls.age.patchValue(calculatedAge);
  }

  // showPreview(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => (this.imgSrc = e.target.result);
  //     const test = reader.readAsDataURL(event.target.files[0]);
  //     this.selectedImage = event.target.files[0];
  //   }
  // }

  // removeImage(event) {
  //   if (event) {
  //     this.imgSrc = '';
  //     event.value = '';
  //   }
  // }

  ngOnDestroy(): void {
    this.employeesFormService.resetEmployeeForm();
  }
}
