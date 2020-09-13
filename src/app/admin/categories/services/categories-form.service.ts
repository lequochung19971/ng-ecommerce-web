import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CategoriesFormService {
  private form = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    parentCategory: new FormControl(''),
    description: new FormControl(''),
    banner: new FormControl(''),
  });
  constructor() {}

  getCategoriesForm() {
    return this.form;
  }
}
