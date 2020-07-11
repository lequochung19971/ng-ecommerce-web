import { Gender } from '../enum/gender.enum';
import { Departments } from '../enum/departments.enum';

export class EmployeeUI {
  uuid: String;
  dob: String;
  age: Number;
  fullName: String;
  email: String;
  phone: String;
  department: Departments;
  gender: Gender;
  avatar: String;
  password: String;
  confirmPassword?: String;
}
