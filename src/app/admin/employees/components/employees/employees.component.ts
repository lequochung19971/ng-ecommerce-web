import { Component, OnInit } from '@angular/core';
import { EmployeesFormDialogService } from '../../services/employees-form-dialog.service';
import { Employee } from 'src/app/admin/models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  constructor(protected employeesFormDialogService: EmployeesFormDialogService) {}

  ngOnInit(): void {}

  openCreateEmployeesDialog() {
    this.employeesFormDialogService.openEmployeesFormDialog();
  }

  openEditEmployeesDialog(data: Employee) {
    this.employeesFormDialogService.openEmployeesFormDialog(data);
  }
}
