import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const port = 5500;
const mongoDbUrl = "mongodb://localhost:27017/startProjectApi";

import userRouter from "./routes/auth.route.js";
import studentRouter from "./routes/register.route.js"

app.use("/api/v1/user", userRouter);
app.use("/api/v2/student", studentRouter);

mongoose
.connect(mongoDbUrl)
.then(() => app.listen(port))
.then(() => console.log(`server is connected to DB at port ${port}`))
.catch((err) => console.log(`your error is ${err}`))