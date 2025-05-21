import express from "express";
import { createUser, deleteUser, findUser, getUsers, updateUser } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/', getUsers);//ambil semua data
userRouter.get('/:id', findUser);//ambil satu data
userRouter.post('/', createUser);//buat data post
userRouter.put('/:id', updateUser);//update data post
userRouter.delete('/:id', deleteUser);//hapus data post

export default userRouter;