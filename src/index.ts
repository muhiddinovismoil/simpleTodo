import express, { Application } from "express";
import mongoose, { Connection } from "mongoose";
import authRouter from "./routes/auth.routes";
import userRoutes from "./routes/users.routes";
import todoRoutes from "./routes/todo.routes";
import { boot, db } from "./config/index";
const app: Application = express();
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/todo", todoRoutes);
app.listen(boot.port, () => {
    mongoose.connect(db.uri);
    console.log("MONGO DB CONNECTED");
    console.log(`Server is running on PORT: ${boot.port}`);
});
