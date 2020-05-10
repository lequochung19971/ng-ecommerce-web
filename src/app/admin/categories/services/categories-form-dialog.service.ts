import { Injectable } from '@angular/core';
import { FormDialogService } from 'src/app/shared/services/form-dialog.service';
import { CategoriesFormComponent } from '../components/categories-form/categories-form.component';

@Injectable({
  providedIn: 'root',
})
export class CategoriesFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openCategoriesFormDialog() {
    return this.formDialog.openFormDialog(CategoriesFormComponent);
  }
}
