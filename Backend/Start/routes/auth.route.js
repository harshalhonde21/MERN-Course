import express from "express";
import {isLogin, loginUser, registerUser} from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser)
router.route("/isLogin").get(isAuthenticated,  isLogin)

export default router;