import mongoose from "mongoose";
import validator from "validator";

const user = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator:[validator.isEmail, "Email is not valid"],
    },
    password:{
        type:String,
        required:true,
    }

})

const User = mongoose.model("newUserBlog", user);

export default User;