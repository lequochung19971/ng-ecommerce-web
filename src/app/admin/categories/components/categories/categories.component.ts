import { Component, OnInit } from '@angular/core';
import { CategoriesFormDialogService } from '../../services/categories-form-dialog.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(protected categoriesFormDialogService: CategoriesFormDialogService) {}

  ngOnInit(): void {}

  openCreateDialog() {
    this.categoriesFormDialogService.openCategoriesFormDialog();
  }
}
