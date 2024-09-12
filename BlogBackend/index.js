import express from "express";
import mongoose from "mongoose";
import cron from "node-cron";

import Blog from "./models/blog.model.js";

const app = express();

app.use(express.json());

const port = 5500;
const MONGO_URI = "mongodb://localhost:27017/MernBlogApplication";


cron.schedule("* * * * *", async() => {
    try {
        const blogToBePublished = await Blog.find({
            status: "scheduled",
            scheduledAt: {$lte: new Date()}
        })

        for(const blog of blogToBePublished){
            blog.status = "published";
            blog.scheduledAt = null;
            await blog.save();
        }
    } catch (error) {
        console.log("Error publishing blog", error)
    }
})

mongoose
.connect(MONGO_URI)
.then(() => app.listen(port))
.then(() => console.log(`server is connected at port ${port}`))
.catch((err) => console.log(`your error is ${err}`))
