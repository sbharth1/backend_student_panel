import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "../routes/router";
const app = express();
dotenv.config();

const CLIENT_URL = process.env.CLIENT_URL!;

app.use(
  cors({
    origin: `${CLIENT_URL}`,
    methods: ["GET", "POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
