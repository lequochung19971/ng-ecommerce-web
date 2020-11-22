import { model, Schema } from "mongoose";
import { ModificationNoteSchema } from "../../providers/schema/modification-note.schema";

const employeesSchema: Schema = new Schema({
  _id: String,
  dob: String,
  age: Number,
  fullName: String,
  email: String,
  phone: String,
  department: String,
  password: String,
  gender: String,
  avatar: String,
  modificationNote: [ModificationNoteSchema]
}, { id: true })

export default model('employees', employeesSchema);