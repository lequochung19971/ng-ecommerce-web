import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SuppliersFormService } from '../../services/suppliers-form.service';

@Component({
  selector: 'app-suppliers-form',
  templateUrl: './suppliers-form.component.html',
  styleUrls: ['./suppliers-form.component.scss'],
})
export class SuppliersFormComponent implements OnInit {
  form: FormGroup;

  constructor(protected suppliersFormService: SuppliersFormService) {}

  ngOnInit(): void {
    this.form = this.suppliersFormService.getSuppliersForm();
  }

  removeImage(image): void {
    console.log(image);
  }
}
