import { Injectable } from '@angular/core';
import { FormDialogService } from 'src/app/shared/services/form-dialog.service';
import { AuthorsFormComponent } from '../components/authors-form/authors-form.component';

@Injectable({
  providedIn: 'root',
})
export class AuthorsFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openAuthorFormDialog() {
    return this.formDialog.openFormDialog(AuthorsFormComponent);
  }
}
