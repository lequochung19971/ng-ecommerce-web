import { Injectable } from '@angular/core';
import { FormDialogService } from 'src/app/shared/services/form-dialog.service';
import { BooksFormComponent } from '../components/books-form/books-form.component';

@Injectable({
  providedIn: 'root',
})
export class BooksFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openBooksFormDialog() {
    return this.formDialog.openFormDialog(BooksFormComponent);
  }
}
