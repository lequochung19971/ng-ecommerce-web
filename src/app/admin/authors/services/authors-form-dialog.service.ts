import { Injectable } from '@angular/core';
import { AuthorsFormComponent } from '../components/authors-form/authors-form.component';
import { FormDialogService } from '../../shared/services/form-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorsFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openAuthorFormDialog() {
    return this.formDialog.openFormDialog(AuthorsFormComponent);
  }
}
