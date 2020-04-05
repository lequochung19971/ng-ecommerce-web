import { Component, OnInit } from '@angular/core';
import { EmployeesFormDialogService } from '../../services/employees-form-dialog.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  constructor(protected employeesFormDialogService: EmployeesFormDialogService) {}

  ngOnInit(): void {}

  openCreateEmployeesDialog() {
    this.employeesFormDialogService.openEmployeesFormDialog();
  }
}
