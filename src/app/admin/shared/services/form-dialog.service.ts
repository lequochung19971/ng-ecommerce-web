import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmployeeFE } from '../../providers/models/employee-fe.model';
@Injectable({
  providedIn: 'root',
})
export class FormDialogService {
  constructor(protected dialog: MatDialog) {}

  openFormDialog(FormComponent, data?): MatDialogRef<any> {
    const formDialogRef = this.dialog.open(FormComponent, {
      width: '1366px',
      position: { top: '100px' },
      disableClose: true,
      autoFocus: true,
      panelClass: 'lqh-dialog',
      data: data,
    });

    return formDialogRef;
  }

  openFullFormDialog(FormComponent) {
    return this.dialog.open(FormComponent, {
      width: '100%',
      height: '100%',
      maxHeight: '100%',
      maxWidth: '100%',
      position: { top: '0' },
      disableClose: true,
      autoFocus: true,
      panelClass: 'lqh-dialog-full',
    });
  }
}
