import { Schema, model } from "mongoose";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890",5);
interface Teachers {
  teacherId: string;
  teacherName: string;
  teacherSubject: string;
  teacherNo: string;
}

const teacherSchema = new Schema<Teachers>(
  {
    teacherId: {
      type: String,
      unique: true,
      required: true,
      default:()=> nanoid(5)
    },
    teacherName: {
      type: String,
      required: true,
    },
    teacherSubject: {
      type: String,
      required: true,
    },
    teacherNo: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userTeacher = model("teacher", teacherSchema);

export default userTeacher;
