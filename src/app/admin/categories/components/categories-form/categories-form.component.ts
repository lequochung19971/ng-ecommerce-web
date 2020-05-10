import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoriesFormService } from '../../services/categories-form.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss'],
})
export class CategoriesFormComponent implements OnInit {
  form: FormGroup;
  constructor(protected categoriesFormService: CategoriesFormService) {}

  ngOnInit(): void {
    this.form = this.categoriesFormService.getCategoriesForm();
  }

  removeImage(image): void {}
}
