import { Injectable } from '@angular/core';
import { FormDialogService } from 'src/app/shared/services/form-dialog.service';
import { PublishersFormComponent } from '../components/publishers-form/publishers-form.component';

@Injectable({
  providedIn: 'root',
})
export class PublishersFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openPublisherFormDialog() {
    return this.formDialog.openFormDialog(PublishersFormComponent);
  }
}
