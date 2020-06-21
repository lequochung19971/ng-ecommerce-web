import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesFormComponent } from '../components/employees-form/employees-form.component';
import { FormDialogService } from '../../shared/services/form-dialog.service';
import { Employee } from '../../shared/models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openEmployeesFormDialog(data?: Employee) {
    return this.formDialog.openFormDialog(EmployeesFormComponent, data);
  }
}
