import Blog from "../models/blog.model";

export const addBlog = async(req, res) => {
    try {
        const { title, content, author, tags, image } = req.body;

        const newBlog = new Blog({
            title,
            content,
            author,
            tags,
            image
        })

        await newBlog.save();

        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            blog: newBlog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating blog",
            error: error.message
        })
    }
}

export const deleteBlog = async(req,res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findByIdAndDelete(id);

        if(!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Blog Deleted Success"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting blog",
            error: error.message
        })
    }
}

export const updateBlog = async(req, res) => {
    try {
        const { id } = req.params;
        const { title, content, tags, image } = req.body;

        const updateBlog = await Blog.findByIdAndUpdate(
            id,
            {title, content, tags, image},
            {new: true}
        );

        if(!updateBlog){
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            })
        }

        res.status(200).json({
            success: true,
            message: "Blog Updated Success",
            blog: updateBlog
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting blog",
            error: error.message
        })
    }
}

export const getAllBlogs = async(req, res) => {
    try {
        const blogs = await Blog.find().populate("author", "name email");

        res.status(200).json({
            success: true,
            message: "Blogs Retrieved Successfully",
            blogs: blogs
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Fetching the blog",
            error: error.message
        })
    }
}