import { model, Schema } from "mongoose";
import { getUUID } from "../../shared/services/utilities.service";
import { ModificationNoteSchema } from "../../providers/schema/modification-note.schema";

const employeesSchema: Schema = new Schema({
  _id: { type: String, default: getUUID() },
  dob: String,
  age: Number,
  fullName: String,
  email: String,
  phone: Number,
  department: String,
  password: String,
  gender: String,
  avatar: String,
  modificationNote: [ModificationNoteSchema]
})

export default model('employees', employeesSchema);