import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class FormDialogService {
  constructor(protected dialog: MatDialog) {}

  openFormDialog(FormComponent) {
    return this.dialog.open(FormComponent, {
      width: '100%',
      position: { top: '100px' },
      disableClose: true,
      autoFocus: true,
    });
  }
}
