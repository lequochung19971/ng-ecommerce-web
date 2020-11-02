import { Injectable } from '@angular/core';
import { BooksFormComponent } from '../components/books-form/books-form.component';
import { FormDialogService } from 'src/app/admin/shared/services/form-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class BooksFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openBooksFormDialog() {
    return this.formDialog.openFormDialog(BooksFormComponent);
  }
}
