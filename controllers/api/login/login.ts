import { Request, Response } from "express";
import { generateToken } from "../../../utils/jwt";
import User from "../../../db/models/studentSchema";
import { DbConnect } from "../../../db/config/connect";


export const login = async (req: Request, res: Response) => {
  try {
    await DbConnect();
    const { email, password } = req.body;
    if (!email || !password) {
     res.status(400).json({
        message: "email and password is invalid",
      });
      return;
    }

    const token = generateToken(email);
   
    const user = new User({email,password});
    await user.save();

    res.status(200).json({
      message: "User login successfully!!",
      token,
      data: {
        email:email,
        success:true,
      },
    });

  } catch (error: any) {                                                                                           
    res.status(500).json({
      message: "Server Error",
      error: error.message,
      success:false,
    });
  }
};
