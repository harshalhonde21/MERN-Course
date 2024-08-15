import express from "express";
import { getStudents, registerStudent } from "../controllers/register.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer-config.js";

const router = express.Router();

router.route("/student-register").post(upload.single("image"), registerStudent);
router.route("/get-students").get(isAuthenticated, getStudents);

export default router;
