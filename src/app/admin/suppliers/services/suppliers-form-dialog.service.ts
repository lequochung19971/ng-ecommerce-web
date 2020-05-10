import { Injectable } from '@angular/core';
import { FormDialogService } from 'src/app/shared/services/form-dialog.service';
import { SuppliersFormComponent } from '../components/suppliers-form/suppliers-form.component';

@Injectable({
  providedIn: 'root',
})
export class SuppliersFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openSuppliersFormDialog() {
    return this.formDialog.openFormDialog(SuppliersFormComponent);
  }
}
