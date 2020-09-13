import { Component, OnInit, Input, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { EmployeesService } from '../../services/employees.service';
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';

import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faFemale } from '@fortawesome/free-solid-svg-icons';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilitiesService } from 'src/app/admin/shared/services/utilities.service';
import { Departments } from 'src/app/admin/providers/enum/departments.enum';
import { EmployeeUI } from 'src/app/admin/providers/models/employee-ui.model';
import { LoadingService } from 'src/app/admin/shared/services/loading.service';
import { FormDialogService } from 'src/app/admin/shared/services/form-dialog.service';
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EmployeeUI,
    protected breakpointObserver: BreakpointObserver,
    protected employeesService: EmployeesService,
    protected utilitiesService: UtilitiesService,
    protected loadingService: LoadingService,
    protected dialogService: FormDialogService,
    protected dialogRef: MatDialogRef<EmployeesFormComponent>
  ) {}

  ngOnInit(): void {
    this.employeesService.generateEmployeeFormAndDefaultFormData(this.data);
    this.form = this.employeesService.getEmployeeForm();
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (!this.form.controls.id.value) {
        this.newEmployee();
      } else {
        this.updateEmployee();
      }
    }
  }

  newEmployee(): void {
    this.employeesService.createEmployee(this.form.value).subscribe((data: any) => {
      if (data.id) {
        this.employeesService.resetEmployeeForm();
        this.loadingService.close();
        this.dialogRef.close();
      }
    });
  }

  updateEmployee(): void {
    this.employeesService.updateEmployee(this.form.value).subscribe((data: any) => {
      if (data.id) {
        this.employeesService.resetEmployeeForm();
        this.loadingService.close();
        this.dialogRef.close();
      }
    });
  }

  changeDate() {
    const dateOfBirthForm = this.form.controls.dob;
    this.updateAge(dateOfBirthForm.value);
  }

  updateAge(date: string | Date) {
    const calculatedAge = this.utilitiesService.calculateAgeFromDOB(date);
    this.form.controls.age.patchValue(calculatedAge);
  }

  ngOnDestroy(): void {
    this.employeesService.resetEmployeeForm();
  }
}
