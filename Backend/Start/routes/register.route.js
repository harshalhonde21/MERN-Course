import express from "express";
import { deleteStudent, getStudents, registerStudent, updateStudent } from "../controllers/register.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer-config.js"

const router = express.Router();

router.route("/student-register").post(upload.single("image"), registerStudent);
router.route("/get-students").get(getStudents);
router.route("/update-student/:id").put(upload.single("image"), updateStudent);
router.route("/delete-student/:id").delete(deleteStudent)


export default router;