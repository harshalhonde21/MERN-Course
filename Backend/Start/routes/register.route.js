import express from "express";
import { getStudents, registerStudent } from "../controllers/register.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/student-register").post(registerStudent);
router.route("/get-students").get(isAuthenticated, getStudents);


export default router;