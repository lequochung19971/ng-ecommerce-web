import { Component, OnInit } from '@angular/core';
import { EmployeesFormDialogService } from '../../services/employees-form-dialog.service';
import { EmployeeUI } from 'src/app/admin/providers/models/ui-employee.model';
import { Gender } from 'src/app/admin/providers/enum/gender.enum';
import { Departments } from 'src/app/admin/providers/enum/departments.enum';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  MOCK_DATA: EmployeeUI = {
    uuid: '123456789',
    fullName: 'Le Quoc Hung',
    dob: '12/03/1997',
    age: 23,
    phone: '0329442883',
    gender: Gender.M,
    email: 'lequochung19971@gmail.com',
    department: Departments.DIRECTOR,
    password: '123456789',
    avatar: '',
  };

  constructor(
    protected employeesFormDialogService: EmployeesFormDialogService,
    protected employeesService: EmployeesService
  ) {}

  ngOnInit(): void {}

  openCreateEmployeesDialog() {
    this.employeesFormDialogService.openEmployeesFormDialog();
  }

  openEditEmployeesDialog(data: EmployeeUI) {
    this.employeesFormDialogService.openEmployeesFormDialog(this.MOCK_DATA);
  }

  deleteEmployee(uuid: String) {
    this.employeesService.deleteEmployee(uuid);
  }
}
