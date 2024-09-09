import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const port = 5500;
const MONGO_URI = "mongodb://localhost:27017/MernBlogApplication";

mongoose
.connect(MONGO_URI)
.then(() => app.listen(port))
.then(() => console.log(`server is connected at port ${port}`))
.catch((err) => console.log(`your error is ${err}`))
