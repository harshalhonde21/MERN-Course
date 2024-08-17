import Student from "../models/register.model.js";

export const registerStudent = async (req, res) => {
    try {
        const { name, email, age, marks, address, phone } = req.body;

        const existingStudent = await Student.findOne({ email });

        if (existingStudent) {
            return res.status(400).json({
                success: false,
                message: "Student already exist",
            });
        }

        const student = await Student.create({
            name,
            email,
            age,
            marks,
            address,
            phone,
            image: req.file ? req.file.filename : null
        });

        res.status(201).json({
            success: true,
            message: "Student created successfully",
            student,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();

        if (students.length === 0) {
            return res.status(404).json({
                success: false,
                message: "no students found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Student found successfully",
            students,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
