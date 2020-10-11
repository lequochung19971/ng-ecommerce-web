import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { EmployeeUI } from '../../models/employee-ui.model';
import { BaseFormService } from '../base-form/base-form.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFormService extends BaseFormService {
  constructor() {
    super();
  }

  generateForm(form: FormGroup) {
    this.form = form;
    this.generateFormDefaultData<EmployeeUI>();
  }
}
