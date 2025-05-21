import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    author: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    likes: { type: Number, default: 0 },    
}, { timestamps: true });

const Post = mongoose.model("posts", postSchema);

export default Post;

