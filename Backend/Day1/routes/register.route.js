import express from "express";
import { getStudents, registerStudent, updateStudent, deleteStudent } from "../controllers/register.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer-config.js";

const router = express.Router();

// Register student route
router.route("/student-register").post(upload.single("image"), registerStudent);

// Get all students route
router.route("/get-students").get(isAuthenticated, getStudents);

// Update student route
router.route("/update-student/:id").put(upload.single("image"), updateStudent);

// Delete student route
router.route("/delete-student/:id").delete(deleteStudent);

export default router;
