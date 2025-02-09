import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const { MONGO_URL } = process.env;

if (!MONGO_URL) {
  console.log("check the env mongodb url");
}

export async function dataBaseConnection(){
  mongoose
    .connect(MONGO_URL!)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch(() => {
      console.log("error in mongodb connection");
    });
}
 
