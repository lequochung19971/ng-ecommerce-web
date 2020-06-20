import { Injectable } from '@angular/core';
import { SuppliersFormComponent } from '../components/suppliers-form/suppliers-form.component';
import { FormDialogService } from '../../shared/services/form-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class SuppliersFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openSuppliersFormDialog() {
    return this.formDialog.openFormDialog(SuppliersFormComponent);
  }
}
