import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "newUserBlog",
        required:true,
    },
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BlogSchemaMern",
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

commentSchema.pre("save", function(next){
    if(this.isModified()){
        this.updatedAt = Date.now();
    }
    next();
})

const Comment = mongoose.model("commentMERN", commentSchema);
export default Comment;