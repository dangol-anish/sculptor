import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user.route.js";
import userAuth from "./routes/auth.route.js";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", userAuth);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode,
  });
});
