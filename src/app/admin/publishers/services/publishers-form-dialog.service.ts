import { Injectable } from '@angular/core';
import { PublishersFormComponent } from '../components/publishers-form/publishers-form.component';
import { FormDialogService } from '../../shared/services/form-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class PublishersFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openPublisherFormDialog() {
    return this.formDialog.openFormDialog(PublishersFormComponent);
  }
}
