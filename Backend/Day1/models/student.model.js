import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Email is not valid"],
    },
    age: {
        type: Number,
        required: true,
        min: 5,
        max: 100,
    },
    marks: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        validate: [validator.isMobilePhone, "Phone number is not valid"],
    },
    image: {
        type: String,
        required: false, // Image is not mandatory
    },
    registrationDate: {
        type: Date,
        default: Date.now,
    }
});

const Student = mongoose.model("StudentStart", studentSchema);

export default Student;
