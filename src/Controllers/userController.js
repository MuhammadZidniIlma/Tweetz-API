import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: true,
            message: "Success",
            data: users
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const findUser = async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: true,
            message: "Success",
            data: user
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    try {
        const {username, email, password} = req.body
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: false,
                message: "Email already exists"
            });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        await User.create({username, email, password: hashPassword});
        res.status(200).json({
            status: true,
            message: "Success to create user",            
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateUser = async (req,res) => {
    try {
        const {username, email, password} = req.body
        const user = await User.findByIdAndUpdate(req.params.id, {username, email, password});
        res.status(200).json({
            status: true,
            message: "Success",
            data: user
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: true,
            message: "Success",
            data: user
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}