import bcrypt from "bcrypt";
import Student from "../models/student.model.js";  // Import the Student model
import cloudinary from "../config/cloudinary.js";

export const registerStudent = async (req, res) => {
    try {
        const { name, email, age, marks, address, phone } = req.body;
        const existingStudent = await Student.findOne({ email });

        if (existingStudent) {
            return res.status(400).json({
                success: false,
                message: "Student already exists",
            });
        }

        let imageUrl = null;
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url; // Store the Cloudinary image URL
        }

        const student = await Student.create({
            name,
            email,
            age,
            marks,
            address,
            phone,
            image: imageUrl,
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
        // Fetch all students from the database
        const students = await Student.find();

        // Check if students exist
        if (students.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No students found",
            });
        }

        // Respond with the list of students
        res.status(200).json({
            success: true,
            students,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age, marks, address, phone } = req.body;

        let student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        let imageUrl = student.image;

        if (req.file) {
            // Delete the existing image from Cloudinary if it exists
            if (imageUrl) {
                const publicId = imageUrl.split('/').pop().split('.')[0];
                await cloudinary.uploader.destroy(publicId);
            }

            // Upload the new image to Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url;
        }

        student = await Student.findByIdAndUpdate(
            id,
            {
                name,
                email,
                age,
                marks,
                address,
                phone,
                image: imageUrl,
            },
            { new: true } // Return the updated student
        );

        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            student,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        // Delete the image from Cloudinary if it exists
        if (student.image) {
            const publicId = student.image.split('/').pop().split('.')[0];
            await cloudinary.uploader.destroy(publicId);
        }

        await Student.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};