import { Request, Response } from "express";
import User from "../models/studentLoginSchema";
import { dataConnection } from "../config/connect";

export const login = async (req: Request, res: Response) => {
  await dataConnection();
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      res.status(404).json({
        message: "email and password are invalid",
      });
    }

    const user = User.find({ email });

    if (!user) {
      res.status(404).json({
        message: "Email and userName invalid",
      });
    }

    res.status(200).json({
      message: "userName and email valid",
    });
  } catch (err) {
    res.status(404).json({
      message: "err in login api",
    });
  }
};

export const singup = async (req: Request, res: Response) => {
  await dataConnection();
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      res.status(404).json({
        message: "email and password are invalid",
      });
    }

    const user = new User({ email, password });
    user.save();

    res.status(200).json({
      message: "inserted data sucessfully",
    });
  } catch (err) {
    res.status(404).json({
      message: "err in login api",
    });
  }
};
