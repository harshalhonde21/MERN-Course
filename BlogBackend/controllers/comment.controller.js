import Blog from "../models/comment.model.js";
import Comment from "../models/comment.model.js";

export const addComment = async (req, res) => {
    try {
        const { content } = req.body;
        const { blogId } = req.params;
        const userID = req.user.id;

        const blog = await Blog.findById(blogId);

        if(!blog){
            return res.status(404).json({
                success:false,
                message: "Blog not Found"
            })
        }

        const comment = new Comment({
            content,
            author:userID,
            blog:blogId
        })

        await comment.save();

        res.status(201).json({
            success:true,
            message: "Comment Added Successfully",
            comment
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }   
}

export const getAllComment = async(req, res) => {
    try {
        const { blogId } = req.params;

        const comments = await Comment.find({blog: blogId}).populate("author", "name email");

        if(!comments) {
            return res.status(404).json({
                success:false,
                message:"Comment not found"
            })
        }

        res.status(200).json({
            success:true,
            message: "Comments Retrieved Successfully",
            comments
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}