// Import the dotenv package
import dotenv from "dotenv";
// Configure the dotenv package to load environment variables from the .env file
dotenv.config({
  path: "./.env",
});

import connectDB from "./db/index.js";
// import { app } from "./app.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // The environment variable is now available
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";
//route declaration
app.use("/api/v1/users", userRouter);

const port = process.env.PORT || 8000;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  })
  .catch((err) => {
    console.error("MONGODB connection failed!!! ", err);
  });
