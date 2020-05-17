import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class FormDialogService {
  constructor(protected dialog: MatDialog) {}

  openFormDialog(FormComponent) {
    return this.dialog.open(FormComponent, {
      width: '1366px',
      position: { top: '100px' },
      disableClose: true,
      autoFocus: true,
      panelClass: 'lqh-dialog',
    });
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
