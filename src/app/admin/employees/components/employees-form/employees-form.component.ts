import { Component, OnInit, Inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { EmployeesService } from '../../services/employees.service';
import * as _ from 'lodash';
import { FormGroup } from '@angular/forms';

import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faFemale } from '@fortawesome/free-solid-svg-icons';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilitiesService } from 'src/app/admin/shared/services/utilities.service';
import { Departments } from 'src/app/admin/providers/enum/departments.enum';
import { EmployeeFE } from 'src/app/admin/providers/models/employee-fe.model';
import { LoadingService } from 'src/app/admin/shared/services/loading.service';
import { FormDialogService } from 'src/app/admin/shared/services/form-dialog.service';
import { DialogMode } from 'src/app/admin/providers/enum/dialog-mode.enum';
import { TranslateService } from '@ngx-translate/core';
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
    @Inject(MAT_DIALOG_DATA) public dialogData: EmployeeFE,
    protected breakpointObserver: BreakpointObserver,
    protected employeesService: EmployeesService,
    protected utilitiesService: UtilitiesService,
    protected loadingService: LoadingService,
    protected dialogService: FormDialogService,
    protected dialogRef: MatDialogRef<EmployeesFormComponent>,
    protected translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  ngOnInit(): void {
    this.employeesService.generateEmployeeFormAndDefaultFormData(this.dialogData);
    this.form = this.employeesService.getEmployeeForm();
  }

  getDialogMode(): DialogMode {
    return this.dialogData && this.dialogData._id ? DialogMode.EDIT : DialogMode.CREATE;
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (!this.form.value._id) {
        this.newEmployee();
      } else {
        this.updateEmployee();
      }
    }
  }

  newEmployee(): void {
    this.employeesService.createEmployee(this.form.value).subscribe((data: EmployeeFE) => {
      if (data._id) {
        this.employeesService.resetEmployeeForm();
        this.loadingService.close();
        this.dialogRef.close(true);
      }
    });
  }

  updateEmployee(): void {
    this.employeesService.updateEmployee(this.form.value).subscribe((data: any) => {
      if (data._id) {
        this.employeesService.resetEmployeeForm();
        this.loadingService.close();
        this.dialogRef.close(true);
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
