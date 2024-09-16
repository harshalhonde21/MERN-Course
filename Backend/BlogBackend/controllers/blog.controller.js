import Blog from "../models/blog.model.js";

export const addBlog = async(req, res) => {
    try {
        const { title, content, tags, image, scheduledAt } = req.body;

        // Author is set by the isAuth middleware
        const author = req.user._id; 

        let status = "draft";                    

        if(scheduledAt && new Date(scheduledAt) > new Date()){
            status = "scheduled";
        } else {
            status = "published";
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

        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            blog: newBlog
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating blog",
            error: error.message
        });
    }
};


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
        const { status } = req.query;

        const query = status ? { status } : {};

        if (status === "draft" || status === "scheduled") {
            query.author = req.user._id;
        }

        if (!status || status === "published") {
            query.status = "published";
        }

        const blogs = await Blog.find(query).populate("author", "name email");

        res.status(200).json({
            success: true,
            message: "Blogs Retrieved Successfully",
            blogs: blogs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Fetching the blogs",
            error: error.message
        });
    }
};



export const getAllPublishedBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ status: "published" }).populate("author", "name email");
        
        res.status(200).json({
            success: true,
            message: "Published Blogs Retrieved Successfully",
            blogs: blogs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Fetching Published Blogs",
            error: error.message
        });
    }
}