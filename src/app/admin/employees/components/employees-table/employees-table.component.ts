import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Departments } from 'src/app/admin/providers/enum/departments.enum';
import { Gender } from 'src/app/admin/providers/enum/gender.enum';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
})
export class EmployeesTableComponent implements OnInit {
  @Output() editEmployee = new EventEmitter();
  @Output() deleteEmployee = new EventEmitter();

  ELEMENT_DATA = [
    {
      uuid: 1,
      fullName: 'Le Quoc Hung',
      firstName: 'Le',
      lastName: 'Quoc Hung',
      dob: '12/03/1997',
      age: 23,
      email: 'lequochung19971@gmail.com',
      phone: '0329442883',
      department: Departments.DIRECTOR,
      gender: Gender.M,
    },
    {
      uuid: 2,
      fullName: 'Le Quoc Hung',
      firstName: 'Le',
      lastName: 'Quoc Hung',
      dob: '12/03/1997',
      age: 23,
      email: 'lequochung19971@gmail.com',
      phone: '0329442883',
      department: Departments.ACCOUNTANT,
      gender: Gender.M,
    },
    {
      uuid: 3,
      fullName: 'Le Quoc Hung',
      firstName: 'Le',
      lastName: 'Quoc Hung',
      dob: '12/03/1997',
      age: 23,
      email: 'lequochung19971@gmail.com',
      phone: '0329442883',
      department: Departments.CHAIRMAN,
      gender: Gender.M,
    },
    {
      uuid: 4,
      fullName: 'Le Quoc Hung',
      firstName: 'Le',
      lastName: 'Quoc Hung',
      dob: '12/03/1997',
      age: 23,
      email: 'lequochung19971@gmail.com',
      phone: '0329442883',
      department: Departments.MANAGER,
      gender: Gender.M,
    },
    {
      uuid: 5,
      fullName: 'Le Quoc Hung',
      firstName: 'Le',
      lastName: 'Quoc Hung',
      dob: '12/03/1997',
      age: 23,
      email: 'lequochung19971@gmail.com',
      phone: '0329442883',
      department: Departments.STAFF,
      gender: Gender.M,
    },
    {
      uuid: 6,
      fullName: 'Le Quoc Hung',
      firstName: 'Le',
      lastName: 'Quoc Hung',
      dob: '12/03/1997',
      age: 23,
      email: 'lequochung19971@gmail.com',
      phone: '0329442883',
      department: Departments.DIRECTOR,
      gender: Gender.M,
    },
    {
      uuid: 7,
      fullName: 'Le Quoc Hung',
      firstName: 'Le',
      lastName: 'Quoc Hung',
      dob: '12/03/1997',
      age: 23,
      email: 'lequochung19971@gmail.com',
      phone: '0329442883',
      department: Departments.ASSISTANT,
      gender: Gender.M,
    },
    {
      uuid: 8,
      fullName: 'Le Quoc Hung',
      firstName: 'Le',
      lastName: 'Quoc Hung',
      dob: '12/03/1997',
      age: 23,
      email: 'lequochung19971@gmail.com',
      phone: '0329442883',
      department: Departments.ACCOUNTANT,
      gender: Gender.M,
    },
    {
      uuid: 9,
      fullName: 'Le Quoc Hung',
      firstName: 'Le',
      lastName: 'Quoc Hung',
      dob: '12/03/1997',
      age: 23,
      email: 'lequochung19971@gmail.com',
      phone: '0329442883',
      department: Departments.STAFF,
      gender: Gender.M,
    },
    {
      uuid: 10,
      fullName: 'Le Quoc Hung',
      firstName: 'Le',
      lastName: 'Quoc Hung',
      dob: '12/03/1997',
      age: 23,
      email: 'lequochung19971@gmail.com',
      phone: '0329442883',
      department: Departments.MANAGER,
      gender: Gender.F,
    },
    {
      uuid: 11,
      fullName: 'Le Quoc Hung',
      firstName: 'Le',
      lastName: 'Quoc Hung',
      dob: '12/03/1997',
      age: 23,
      email: 'lequochung19971@gmail.com',
      phone: '0329442883',
      department: Departments.STAFF,
      gender: Gender.M,
    },
  ];
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = [
    'fullName',
    'dob',
    'age',
    'gender',
    'department',
    'phone',
    'email',
    'action',
  ];
  constructor() {}

  ngOnInit(): void {}

  edit(data) {
    this.editEmployee.emit(data);
    // console.log(currentData);
  }

  delete(uuid: String) {
    this.deleteEmployee.emit(uuid);
  }
}
