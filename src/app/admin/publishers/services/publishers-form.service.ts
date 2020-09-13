import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PublishersFormService {
  private form = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    description: new FormControl(''),
    logo: new FormControl(''),
  });

  constructor() {}

  getPublisherForm() {
    return this.form;
  }
}
