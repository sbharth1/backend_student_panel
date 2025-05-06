import { Request, Response } from "express";
import { DbConnect } from "../../../db/config/connect";
import userParent from "../../../db/models/parentSchema";
export const Parent = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  try {
    await DbConnect();
    const { fatherName, motherName, mobileNo } = req.body;

    if (!fatherName || !motherName || !mobileNo) {
      res.status(400).json({
        message: "Inavalid",
        success: false,
      });
      return;
    }

    const mobileRegex = /^[6-9]\d{9}$/;

    if (!mobileRegex.test(mobileNo)) {
      res.status(400).json({
        message: "Invalid MobileNumber",
        success: false,
      });
      return;
    }

    const parent = new userParent({ fatherName, motherName, mobileNo });
    await parent.save();

    res.status(200).json({
      message: "parent successfully created",
      success: true,
    });
    return;
  } catch (error: any) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
      success: false,
    });
    return;
  }
};
