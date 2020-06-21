import { Gender } from './gender.model';
import { Departments } from './departments.model';

export class Employee {
  uuid: Number;
  dob: String;
  age: Number;
  fullName: String;
  email: String;
  phone: Number;
  department: Departments;
  gender: Gender;
  avatar: String;

  isEmployee() {
    return true;
  }
}
