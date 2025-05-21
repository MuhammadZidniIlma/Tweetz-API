import Post from "../models/Post.js";


export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            status: true,
            message: "Success",
            data: posts
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const findPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({
            status: true,
            message: "Success",
            data: post
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    try {
        const {author, image, description, likes} = req.body
        const post = await Post.create({author, image, description, likes});
        res.status(200).json({
            status: true,
            message: "Success",
            data: post
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    try {
        const {author, image, description, likes} = req.body
        const post = await Post.findByIdAndUpdate(req.params.id, {author, image, description, likes});
        res.status(200).json({
            status: true,
            message: "Success",
            data: post
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: true,
            message: "Success",
            data: post
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}