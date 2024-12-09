import { Router } from "express";
import {
    getAllUsersCon,
    getUserByIdCon,
    updateUserByIdCon,
    deleteUserByIdCon,
} from "../controllers/user.controller";
const userRoutes = Router();
userRoutes.get("/");
userRoutes.get("/:id");
userRoutes.put("/:id");
userRoutes.delete("/:id");
export default userRoutes;
