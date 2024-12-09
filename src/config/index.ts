import dotenv from "dotenv";
dotenv.config();
export const boot = {
    port: process.env.PORT,
};
export const db = {
    uri: process.env.MONGO_URI || "mongodb://localhost:27017/todo_mini_app",
};
