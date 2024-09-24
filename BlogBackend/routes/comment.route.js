import express from "express";
import {addComment, getAllComment} from "../controllers/comment.controller.js";
import { isAuth } from "../middlewares/auth.middleware";

const router = express.Router();

router.route("/add-comment/:id").post(isAuth, addComment);
router.route("getAll-comment/:id").get(getAllComment);

export default router;