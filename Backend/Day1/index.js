import express from "express";
import mongoose from "mongoose";
const app = express();

app.use(express.json());


const port = 5500; 
const mongoUrl = "mongodb://127.0.0.1/sampleServer";

import userRouter from "./routes/auth.route.js";

app.use("/api/v1/users", userRouter);

mongoose
  .connect(mongoUrl)
  .then(() => app.listen(port))
  .then(() =>
    console.log(`⚙️Server is running and connected to db at port ${port} :)`)
  )
  .catch((err) => console.log(`${err} is error`));
