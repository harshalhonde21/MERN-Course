import bcrypt from "bcrypt";
import User from "../models/auth.model.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if ([name, email, password].some((field) => field?.trim() === "")) {
      return res.status(400).json({ message: "All Fields are required" });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { name }] });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      success: true,
      message: "User Registered successfully",
      user,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter the credentials",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    const checkMatchPass = await bcrypt.compare(password, user.password);

    if (!checkMatchPass) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Logged In successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};