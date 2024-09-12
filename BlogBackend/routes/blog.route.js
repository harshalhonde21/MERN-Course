import express from "express";
import {addBlog, deleteBlog, updateBlog, getAllBlogs} from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/add-blog", addBlog);
router.put("/update-blog/:id", updateBlog);
router.delete("/delete-blog/:id", deleteBlog);
router.get("/get-blogs", getAllBlogs);


export default router;