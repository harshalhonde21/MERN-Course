import express from "express";
import mongoose from "mongoose";
import cron from "node-cron";  // Import cron

import Blog from "./models/blog.model.js";  // Import the Blog model
import userRouter from "./routes/auth.route.js";
import blogRouter from "./routes/blog.route.js";

const app = express();

app.use(express.json());

const port = 5500;
const mongoDbUrl = "mongodb://localhost:27017/MernBlogApp";

// Routes
app.use("/api/v1/user", userRouter);                    
app.use("/api/v2/blog", blogRouter);

// Cron job to check and publish scheduled blogs every minute
cron.schedule("* * * * *", async () => {
    try {
        // Find blogs that are scheduled to be published and the scheduled time has passed
        const blogsToPublish = await Blog.find({
            status: "scheduled",
            scheduledAt: { $lte: new Date() },
        });

        for (const blog of blogsToPublish) {
            // Update the blog status to 'published'
            blog.status = "published";
            blog.scheduledAt = null; // Clear the scheduledAt field
            await blog.save();
            console.log(`Published blog: ${blog.title}`);
        }
    } catch (error) {
        console.error("Error publishing scheduled blogs:", error);
    }
});

// MongoDB Connection and Server Startup
mongoose
  .connect(mongoDbUrl)
  .then(() => app.listen(port))
  .then(() => console.log(`Server is connected to DB and running on port ${port}`))
  .catch((err) => console.log(`Error: ${err}`));
