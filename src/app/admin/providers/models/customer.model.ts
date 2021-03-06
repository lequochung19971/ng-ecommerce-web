import { Gender } from '../enum/gender.enum';

export class Customer {
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
