import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
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
  active:{
    type:Number,
  }
},
{timestamps:true});


userSchema.pre('save',async function(next){
  if (!this.isModified('password')) return next();
  try {
      const salt = await bcrypt.genSalt(15);
      this.password = await bcrypt.hash(this.password, salt);
      next();
  } catch (error) {
      next(error as Error);
  }
})

const User = model("user",userSchema);

export default User;