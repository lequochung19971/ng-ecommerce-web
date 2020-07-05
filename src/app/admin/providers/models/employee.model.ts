import { Gender } from '../enum/gender.enum';
import { Departments } from '../enum/departments.enum';

export class Employee {
  uuid: number;
  dob: string;
  age: number;
  fullName: string;
  email: string;
  phone: number;
  department: Departments;
  password: string;
  gender: Gender;
  avatar: string;
  static tableName: string = 'employees';

  constructor(props: Employee) {
    Object.keys(props).forEach((prop) => {
      const value = props[prop];
      this[prop] = value;
    });
  }
}
