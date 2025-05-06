import { Request, Response } from "express";
import { DbConnect } from "../../../db/config/connect";
import userParent from "../../../db/models/parentSchema";
export const Parent = async (req: Request, res: Response) => {
  try {
    await DbConnect();
    const { fatherName, motherName, mobileNo } = req.body;

    if (!fatherName || !motherName || !mobileNo) {
      res.status(400).json({
        message: "Inavalid",
        success: false,
      });
    }

    if (mobileNo > 10) {
      res.status(400).json({
        message: "Invalid MobileNo.",
        success: false,
      });
    }

    const parent = new userParent({ fatherName, motherName, mobileNo });
    await parent.save();

    res.status(200).json({
      message: "parent successfully created",
      success: true,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
      success: false,
    });
  }
};
