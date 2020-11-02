import { Injectable } from '@angular/core';
import { CategoriesFormComponent } from '../components/categories-form/categories-form.component';
import { FormDialogService } from '../../shared/services/form-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openCategoriesFormDialog() {
    return this.formDialog.openFormDialog(CategoriesFormComponent);
  }
}
