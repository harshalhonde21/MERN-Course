import jwt from "jsonwebtoken";
import { User } from "../models/auth.model.js";

const secret = "helloguyswearelearningmernstackcoursesodontseehere";

export const createToken = ( id, email) => {
    const token = jwt.sign(
        {
            id,
            email,
        },
        secret,
        {
            expiresIn: "1d",
        }
    );

    return token;
}

export const isAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if(!token){
            return res.status(401).json({
                success: false,
                isLogin:false,
                message: "missing token"
            })
        }

        jwt.verify(token, secret, async(err, user) => {
            if (err) {
                return res.status(400).json({
                    success:false,
                    isLogin:false,
                    message: err.message,
                })
            }

            req.user = await User.findById(user.id);
            next();
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}