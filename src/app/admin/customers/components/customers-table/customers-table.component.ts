import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/admin/models/gender.model';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss'],
})
export class CustomersTableComponent implements OnInit {
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
      gender: Gender.M,
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
      gender: Gender.M,
    },
  ];
  dataSource = this.ELEMENT_DATA;
  displayedColumns: string[] = ['fullName', 'dob', 'age', 'gender', 'phone', 'email', 'action'];
  constructor() {}

  ngOnInit(): void {}
}