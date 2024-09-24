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


export const editComment = async (req, res) => {
    const { content } = req.body;
    const { commentId } = req.params;
    const userId = req.user.id;  // assuming req.user contains the logged-in user's data

    try {
        // Find the comment by ID
        const comment = await Comment.findById(commentId);

        // Check if comment exists
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        // Check if the user owns the comment
        if (comment.author.toString() !== userId) {
            return res.status(403).json({ message: "Unauthorized to edit this comment" });
        }

        // Update the comment content
        comment.content = content;
        await comment.save();

        res.status(200).json({ message: "Comment updated successfully", comment });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


export const deleteComment = async (req, res) => {
    const { commentId } = req.params;
    const userId = req.user.id;  // assuming req.user contains the logged-in user's data

    try {
        // Find the comment by ID
        const comment = await Comment.findById(commentId);

        // Check if comment exists
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        // Check if the user owns the comment
        if (comment.author.toString() !== userId) {
            return res.status(403).json({ message: "Unauthorized to delete this comment" });
        }

        // Delete the comment
        await comment.remove();

        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
