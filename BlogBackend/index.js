import express from "express";
import mongoose from "mongoose";
import cron from "node-cron";

import Blog from "./models/blog.model.js";

const app = express();

app.use(express.json());

const port = 5500;
const MONGO_URI = "mongodb://localhost:27017/MernBlogApplication";


import authRouter from "./routes/auth.route.js"
import blogRouter from "./routes/blog.route.js"
import commentRouter from "./routes/comment.route.js"


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

app.use("/api/v1/user", authRouter);                    
app.use("/api/v2/blog", blogRouter);
app.use("/api/v3/comment", commentRouter);

mongoose
.connect(MONGO_URI)
.then(() => app.listen(port))
.then(() => console.log(`server is connected at port ${port}`))
.catch((err) => console.log(`your error is ${err}`))
