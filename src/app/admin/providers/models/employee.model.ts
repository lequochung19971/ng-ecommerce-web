import { Gender } from '../enum/gender.enum';
import { Departments } from '../enum/departments.enum';

export class EmployeeBE {
  _id: number;
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
      this._id = props._id;
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
