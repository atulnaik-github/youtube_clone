// Import the dotenv package
import dotenv from "dotenv";
import connectDB from "./db/index.js";
// Configure the dotenv package to load environment variables from the .env file
dotenv.config({
  path: "./.env",
});
connectDB();
// import mongoose from "mongoose";
// import express from "express";
// const app = express();
// import { DB_NAME } from "./constants.js";
// // Import the dotenv package
// import dotenv from "dotenv";
// // Configure the dotenv package to load environment variables from the .env file
// dotenv.config();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("MongoDB connected successfully");
//     app.on("error", (error) => {
//       console.error("ERROR: ", error);
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is litening on port::${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR: ", error);
//   }
// })();
