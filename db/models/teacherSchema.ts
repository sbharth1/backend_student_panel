import { Schema, model } from "mongoose";

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
    },
    teacherName: {
      type: String,
    },
    teacherSubject: {
      type: String,
    },
    teacherNo: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Teacher = model("teacher",teacherSchema);

export default Teacher;