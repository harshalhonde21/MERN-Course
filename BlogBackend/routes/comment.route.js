import express from "express";
import {addComment, getAllComment, editComment, deleteComment} from "../controllers/comment.controller.js";
import { isAuth } from "../middlewares/auth.middleware";

const router = express.Router();

router.route("/add-comment/:id").post(isAuth, addComment);
router.route("getAll-comment/:id").get(getAllComment);
router.route("update-comment/:id").get(isAuth, editComment);
router.route("delete-comment/:id").get(isAuth, deleteComment);

export default router;