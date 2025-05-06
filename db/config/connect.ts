import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = process.env.MONGO_URL!;

if (!connectDB) {
  console.log("check the env mongodb url");
}

export async function dataBaseConnection(){
  mongoose
    .connect(connectDB)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch(() => {
      console.log("error in mongodb connection");
    });
}
