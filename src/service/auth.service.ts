import * as fs from "fs/promises";
import User from "../models/users.module";
import { hashPassword, comparePassword } from "../helpers/bcrypt";
export const registerService = async (data) => {
    try {
        const getUser = await User.findOne({ email: data.email });
        if (!getUser) {
            const newUser = await User.create({
                ...data,
                password: hashPassword(data.password),
            });
            newUser.save();
            return { success: true, msg: "You are registered" };
        }
        throw new Error("This email is already in use");
    } catch (error) {
        throw new Error(error.message);
    }
};
export const loginService = async (data) => {
    try {
        const getUser = await User.findOne({ email: data.email });
        if (!getUser) {
            throw new Error("User not found");
        }
        const isPasswordValid = comparePassword(
            data.password,
            getUser.password
        );
        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }
        const userId = getUser._id.toString();
        await fs.writeFile("src/helpers/user_id.txt", userId);
        return { success: true, msg: "User logged in successfully", userId };
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getUserProfileService = async () => {
    try {
        const id = await fs.readFile("src/helpers/user_id.txt", "utf8");
        const getUser = await User.findById(id);
        if (!getUser) {
            throw new Error("User not found");
        }
        return { success: true, userProfile: getUser };
    } catch (error) {
        throw new Error(error.message);
    }
};
