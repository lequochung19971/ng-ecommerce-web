import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesFormComponent } from '../components/employees-form/employees-form.component';
import { FormDialogService } from '../../shared/services/form-dialog.service';
import { Employee } from '../../providers/models/employee.model';
import { EmployeeUI } from '../../providers/models/ui-employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesFormDialogService {
  constructor(protected formDialog: FormDialogService) {}

  openEmployeesFormDialog(data?: EmployeeUI) {
    return this.formDialog.openFormDialog(EmployeesFormComponent, data);
  }
}
