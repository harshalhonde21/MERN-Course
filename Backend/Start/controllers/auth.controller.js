import bcrypt from "bcrypt";
import User from "../models/auth.model.js";
import { createToken } from "../middlewares/auth.middleware.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ $or: [{ email }, { name }] });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPass = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashPass,
        });

        const token = createToken(user._id, user.email)

        res.status(201).json({
            success: true,
            message: "User is registered after functionality of jwt",
            user,
            token
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Please enter the cred",
            })
        }

        const user = await User.findOne({ email });

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User does not exit!! Register First"
            })
        }

        const checkPass = await bcrypt.compare(password, user.password)

        if(!checkPass){
            return res.status(400).json({
                success:false,
                message:"password do not match"
            })
        }

        
        const token = createToken(user._id, user.email)

        res.status(200).json({
            success:true,
            message:"user is login success",
            user,
            token
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message:error.message,
        })
    }

}


export const isLogin = async(req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if(!user) {
            return res.status(200).json({
                success:true,
                isLogin:false
            })
        }

        if(user) {
            return res.status(200).json({
                success:true,
                isLogin:true,
                user
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message:error.message
        })
    }
}