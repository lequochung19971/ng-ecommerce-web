import { Gender } from '../enum/gender.enum';
import { Departments } from '../enum/departments.enum';

export class EmployeeBE {
  id: number;
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

  constructor(props?) {
    if (props) {
      this.id = props.id;
      this.dob = props.dob;
      this.age = props.age;
      this.fullName = props.fullName;
      this.email = props.email;
      this.phone = props.phone;
      this.department = props.department;
      this.password = props.password;
      this.gender = props.gender;
      this.avatar = props.avatar;
    }
  }
}
