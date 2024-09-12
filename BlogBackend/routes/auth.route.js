import express from "express";
import {registerUser, loginUser, isLogin} from "../controllers/auth.controller.js";
import {isAuth} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser);
router.get("isLogin", isAuth, isLogin)

export default router;