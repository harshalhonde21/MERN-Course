import Blog from "../models/blog.model.js";

export const addBlog = async (req, res) => {
    try {
        const { title, content, author, tags, image, scheduledAt } = req.body;

        let status = "draft";
        if (scheduledAt && new Date(scheduledAt) > new Date()) {
            status = "scheduled";
        } else {
            status = "published"; // Publish immediately if no scheduled date is provided
        }

        const newBlog = new Blog({
            title,
            content,
            author,
            tags,
            image,
            status,
            scheduledAt: status === "scheduled" ? new Date(scheduledAt) : null,
        });

        await newBlog.save();

        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        res.status(500).json({ message: "Failed to create blog", error: error.message });
    }
};


export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete blog", error: error.message });
    }
};


export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, tags, image } = req.body;

        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { title, content, tags, image },
            { new: true } // Return the updated document
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
    } catch (error) {
        res.status(500).json({ message: "Failed to update blog", error: error.message });
    }
};

export const getAllBlogs = async (req, res) => {
    try {
        const { status } = req.query; // Optional status filter

        const query = status ? { status } : {};
        const blogs = await Blog.find(query).populate("author", "name email");

        res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch blogs", error: error.message });
    }
};
