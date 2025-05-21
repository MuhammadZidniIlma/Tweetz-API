import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser } from "./userController.js";
import User from "../models/User.js";
import dotenv from 'dotenv';


dotenv.config(); // Harus dipanggil sebelum akses process.env.*

const SECRET_KEY = process.env.JWT_SECRET;
export const register = async (req, res) => {
    return createUser(req, res);
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body
        //cek apakah email ada di database
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({
                status: false,
                message: "Email Or Password Incorrect"
            })
        }
        //mengecek apakah password sesuai
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(404).json({
                status: false,
                message: "Email Or Password Incorrect"
            })
        }

        //mengenerate token random untuk authentikasi
        const token = jwt.sign({
            id : user._id,
            email: user.email
        },
        SECRET_KEY,
        {expiresIn: "1d"}//token berlaku 1 hari
        )

        res.status(200).json({
            status: true,
            message: "Success",
            token,
            data: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}