import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    content:{
        type:String,
        required: true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "newUserBlog",
        required: true,
    },
    tags:{
        type:[String],
        default: [],
    },
    image:{
        type:String,
        default: null,
    },
    status:{
        type:String,
        enum: ["draft", "scheduled", "published"],
        default: "draft",
    },
    scheduledAt:{
        type:Date,
        default: null,
    },
    createdAt: {
        type: Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default:Date.now,
    }
});

blogSchema.pre("save", function(next){
    if(this.isModified()){
        this.updatedAt = Date.now();
    }
    next()
})


const Blog = mongoose.model("BlogSchemaMern", blogSchema)

export default Blog;