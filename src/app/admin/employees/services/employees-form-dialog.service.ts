import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesFormComponent } from '../components/employees-form/employees-form.component';
import { FormDialogService } from 'src/app/shared/services/form-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openEmployeesFormDialog() {
    return this.formDialog.openFormDialog(EmployeesFormComponent);
  }
}
