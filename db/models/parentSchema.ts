import { Schema, model } from "mongoose";

interface Parents {
  fatherName: string;
  motherName: string;
  mobileNo: string;
}

const parentSchema = new Schema<Parents>(
  {
    fatherName: {
      type: String,
      required:true,
    },
    motherName: {
      type: String,
      required:true,

    },
    mobileNo: {
      type: String,
      unique: true,
      required:true,
    },
  },
  { timestamps: true }
);

const userParent =  model("parent", parentSchema);

export default userParent;
