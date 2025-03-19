import { Request, Response } from "express";
import User from "../models/studentLoginSchema";
import { dataBaseConnection } from "../config/connect";
import { generateToken } from "../utils/jwt";
import bcrypt from 'bcryptjs'

export const login = async (req: Request, res: Response) => {
  try {
    await dataBaseConnection();
    const { email, password } = req.body;
    if (!email || !password) {
     res.status(400).json({
        message: "email and password is invalid",
      });
      return;
    }
    
    
    const user = await User.findOne({ email });
    if (!user) {
     res.status(404).json({
        message: "User not found",
      });
      return;
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
       res.status(401).json({
        message: "Invalid password",
      });
      return;
    }

    const token = generateToken(email);
    res.status(200).json({
      message: "User login successfully!!",
      token,
      data: {
        email:email,
      },
    });

  } catch (error: any) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
