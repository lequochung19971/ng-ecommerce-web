import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Gender } from '../models/gender.model';
import { ValidationsService } from '../services/validations.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFormConfig {
  protected form = this.fb.group({
    uuid: [''],
    fullName: ['', [Validators.required, Validators.maxLength(30)]],
    dob: ['', [Validators.required, Validators.maxLength(10), this.validationsService.invalidDate]],
    age: [{ value: null, disabled: true }],
    phone: ['', [Validators.required, Validators.maxLength(10)]],
    gender: [Gender.M],
    email: ['', [Validators.required]],
    department: [''],
    avatar: [''],
  });

  protected dataDefault = _.cloneDeepWith(this.form.value);

  ngOnInit(): void {
    console.log(this.form);
  }

  constructor(protected fb: FormBuilder, protected validationsService: ValidationsService) {}

  getForm() {
    return this.form;
  }

  resetForm() {
    this.form.reset();
    this.form.patchValue(this.dataDefault);
  }
}
