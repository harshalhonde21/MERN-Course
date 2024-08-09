import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const port = 5500;
const mongoDbUrl = "mongodb://localhost:27017/startProjectApi";

import userRouter from "./routes/auth.route.js";

app.use("/api/v1/user", userRouter);

mongoose
.connect(mongoDbUrl)
.then(() => app.listen(port))
.then(() => console.log(`server is connected to DB at port ${port}`))
.catch((err) => console.log(`your error is ${err}`))