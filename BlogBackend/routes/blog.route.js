import express from "express";
import {addBlog, deleteBlog, updateBlog, getAllBlogs, getAllPublishedBlogs} from "../controllers/blog.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js"

const router = express.Router();

router.post("/add-blog",isAuth, addBlog);
router.put("/update-blog/:id",isAuth, updateBlog);
router.delete("/delete-blog/:id",isAuth, deleteBlog);
router.get("/get-blogs",isAuth, getAllBlogs);
router.get("/get-publishBlogs", getAllPublishedBlogs);


export default router;