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
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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

  delete(id: String) {
    this.deleteEmployee.emit(id);
  }
}
