import { Request, Response } from "express";
import { dataBaseConnection } from "../../../db/config/connect";
import { generateToken } from "../../../utils/jwt";

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
