import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user.route.js";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((err) => console.log(err));

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use("/api/user", userRoutes);
