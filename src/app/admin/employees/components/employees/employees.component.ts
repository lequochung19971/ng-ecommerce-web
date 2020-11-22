import { Component, OnInit } from '@angular/core';
import { EmployeeFE } from 'src/app/admin/providers/models/employee-fe.model';
import { Gender } from 'src/app/admin/providers/enum/gender.enum';
import { Departments } from 'src/app/admin/providers/enum/departments.enum';
import { EmployeesService } from '../../services/employees.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  MOCK_DATA: EmployeeFE = {
    _id: '123456789',
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

  constructor(protected employeesService: EmployeesService) {}

  ngOnInit(): void {}

  openCreateEmployeesDialog() {
    this.employeesService.openEmployeesFormDialog();
  }
}
