import { Request, Response } from "express";
import userTeacher from "../../../db/models/teacherSchema";

export const Teacher = async (req: Request, res: Response) => {
  try {
    const { teacherName, teacherSubject, teacherNo } = req.body;
    if (!teacherName || !teacherSubject || !teacherNo) {
      res.status(400).json({
        message: "Invalid",
        success: false,
      });
      return;
    }

    const mobileRegex = /^[6-9]\d{9}$/;

    if (!mobileRegex.test(teacherNo)) {
      res.status(400).json({
        message: "Invalid MobileNumber",
        success: false,
      });
      return;
    }

    const teacher = new userTeacher({ teacherName, teacherSubject, teacherNo });
    await teacher.save();

    res.status(200).json({
      message: "teacher successfully created",
      success: true,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
      success: false,
    });
    return;
  }
};
