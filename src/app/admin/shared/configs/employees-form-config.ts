import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Gender } from '../models/gender.model';
import { ValidationsService } from '../services/validations.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFormConfig {
  protected form = this.fb.group({
    uuid: [''],
    fullName: ['', [Validators.required, Validators.maxLength(30)]],
    dob: ['', [Validators.required, Validators.maxLength(10), this.validationsService.invalidDate]],
    age: [{ value: '', disabled: true }],
    phone: ['', [Validators.required, Validators.maxLength(10)]],
    gender: [Gender.M],
    email: ['', [Validators.required]],
    department: [''],
    avatar: [''],
  });

  constructor(protected fb: FormBuilder, protected validationsService: ValidationsService) {}

  getForm() {
    return this.form;
  }

  resetForm() {
    this.form.reset();
  }
}
