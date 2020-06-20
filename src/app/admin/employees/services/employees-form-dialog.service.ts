import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesFormComponent } from '../components/employees-form/employees-form.component';
import { Employee } from '../../models/employee.model';
import { FormDialogService } from '../../shared/services/form-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openEmployeesFormDialog(data?: Employee) {
    return this.formDialog.openFormDialog(EmployeesFormComponent, data);
  }
}
