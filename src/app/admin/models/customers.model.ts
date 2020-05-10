import { Gender } from './gender.model';

export class Customers {
  uuid: Number;
  dob: String;
  age: Number;
  fullName: String;
  email: String;
  phone: Number;
  gender: Gender;
  avatar?: String;
  address: String;
}
