import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: "newUserStart",
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    image: {
        type: String,
        default: null, // URL or path to the image
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

// Middleware to update the `updatedAt` field on document update
blogSchema.pre("save", function (next) {
    if (this.isModified()) {
        this.updatedAt = Date.now();
    }
    next();
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
