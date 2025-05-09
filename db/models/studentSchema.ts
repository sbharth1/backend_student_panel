import { Schema, Types, model } from "mongoose";
import bcrypt from "bcryptjs";
import {customAlphabet} from 'nanoid'
const nanoid = customAlphabet('1234567890',5);

interface Students {
  studentId: string;
  email: string;
  password: string;
  active: number;
  parent: Types.ObjectId;
  teacher?: Types.ObjectId;
}
const userSchema = new Schema<Students>(
  {
    studentId: {
      type: String,
      required: true,
      unique: true,
      default:()=> nanoid()
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: "Parent",
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
    },
    active: {
      type: Number,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(15);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

const User = model("user", userSchema);

export default User;
