import express from "express";
import { addBlog, deleteBlog, updateBlog, getAllBlogs } from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/add-blog", addBlog);
router.delete("/delete-blog/:id", deleteBlog);
router.put("/update-blog/:id", updateBlog);
router.get("/allBlogs", getAllBlogs);

export default router;
