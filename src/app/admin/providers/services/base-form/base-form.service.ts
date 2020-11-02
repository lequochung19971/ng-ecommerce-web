import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class BaseFormService {
  protected form: FormGroup;
  protected defaultData: any;

  constructor() {}

  getForm() {
    return this.form;
  }

  resetForm() {
    this.form.reset();
    this.form.patchValue(this.defaultData);
  }

  generateForm(_form: FormGroup) {}

  generateFormDefaultData<T>() {
    this.defaultData = _.cloneDeep(this.form.value) as T;
  }

  getFormControlWithProperty(property: string): FormControl {
    if (!this.form) {
      return null;
    }
    return this.form.controls[property] as FormControl;
  }

  getFormValue<T>(): T | any {
    return this.form.value as T;
  }
}
