import express from "express";
import { createPost, deletePost, findPost, getPosts, updatePost } from "../Controllers/postController.js";


const postRouter = express.Router();

postRouter.get('/', getPosts);//ambil semua data
postRouter.get('/:id', findPost);//ambil satu data
postRouter.post('/', createPost);//buat data post
postRouter.put('/:id', updatePost);//update data post
postRouter.delete('/:id', deletePost);//hapus data post

export default postRouter;
