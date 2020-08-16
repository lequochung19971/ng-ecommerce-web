import { Injectable } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { ValidationsService } from 'src/app/admin/shared/services/validations.service';
import { Gender } from '../../enum/gender.enum';
import { EmployeeUI } from '../../models/ui-employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFormService {
  protected form: FormGroup;
  protected defaultData: EmployeeUI;

  constructor(protected fb: FormBuilder, protected validationsService: ValidationsService) {}

  getForm() {
    return this.form;
  }

  resetForm() {
    this.form.reset();
    this.form.patchValue(this.defaultData);
  }

  generateForm(data: EmployeeUI) {
    this.form = this.fb.group({
      uuid: [(data && data.uuid) || ''],
      fullName: [
        (data && data.fullName) || '',
        [Validators.required, Validators.maxLength(30), Validators.minLength(4)],
      ],
      dob: [(data && data.dob) || '', [Validators.required, this.validationsService.invalidDate]],
      age: [{ value: (data && data.age) || null, disabled: true }],
      phone: [
        (data && data.phone) || '',
        [Validators.required, this.validationsService.maxLengthWithNumber(10, 'phone')],
      ],
      gender: [(data && data.gender) || Gender.M],
      email: [(data && data.email) || '', [Validators.required, Validators.email]],
      department: [(data && data.department) || ''],
      password: [(data && data.password) || ''],
      confirmPassword: [''],
      avatar: [(data && data.avatar) || ''],
    });
  }

  generateFormDefaultData() {
    this.defaultData = _.cloneDeep(this.form.value);
  }

  getFormData() {
    return this.form.value;
  }
}
