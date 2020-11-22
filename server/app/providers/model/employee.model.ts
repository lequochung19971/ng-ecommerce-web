import { Gender } from '../enum/gender.enum';
import { Departments } from '../enum/departments.enum';
import { BaseModel } from './base.model';

export class Employee extends BaseModel{
  _id?: string;
  dob: string;
  age: number;
  fullName: string;
  email: string;
  phone: number;
  department: Departments;
  password: string;
  gender: Gender;
  avatar: string;

  constructor(props?: Employee) {
    super();
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
      this.modificationNote = props.modificationNote;
    }
  }

  hasEnoughParams(): boolean {
    const necessaryParams: string[] = this.necessaryParams();
    return necessaryParams.every(param => this[param]);
  }
  
  protected necessaryParams(): string[] {
    return ['dob', 'age', 'fullName', 'email', 'phone', 'gender'];
  }
}
