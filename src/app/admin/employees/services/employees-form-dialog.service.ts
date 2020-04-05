import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesFormComponent } from '../components/employees-form/employees-form.component';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFormDialogService {
  constructor(protected dialog: MatDialog) {}

  openEmployeesFormDialog() {
    return this.dialog.open(EmployeesFormComponent, {
      width: '100%',
      position: { top: '100px' },
      disableClose: true,
      autoFocus: true,
    });
  }
}
