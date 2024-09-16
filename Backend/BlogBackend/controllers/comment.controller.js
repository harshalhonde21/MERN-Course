import Blog from "../models/blog.model.js";
import Comment from "../models/comment.model.js";

export const addComment = async(req, res) => {
    const { content } = req.body;
    const { blogId } = req.params;
    const userId = req.user.id; 

    try {
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        const comment = new Comment({
            content,
            author: userId,
            blog: blogId,
        });

        await comment.save();

        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}


export const getAllComments = async(req, res) => {
const { blogId } = req.params;

    try {
        const comments = await Comment.find({ blog: blogId }).populate("author", "name email");

        if (!comments) {
            return res.status(404).json({ message: "No comments found" });
        }

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}