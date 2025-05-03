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
    },
    motherName: {
      type: String,
    },
    mobileNo: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const Parent =  model("parent", parentSchema);

export default Parent;
