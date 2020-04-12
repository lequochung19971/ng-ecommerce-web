import { Gender } from './gender.model';
import { Departments } from './departments.model';

export class Employees {
  uuid: Number;
  dob: String;
  age: Number;
  fullName: String;
  email: String;
  phone: Number;
  department: Departments;
  gender: Gender;
  avatar: String;
}
