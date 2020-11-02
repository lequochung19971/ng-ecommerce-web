import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SuppliersFormService {
  private form = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    description: new FormControl(''),
    logo: new FormControl(''),
  });
  constructor() {}

  getSuppliersForm() {
    return this.form;
  }
}
