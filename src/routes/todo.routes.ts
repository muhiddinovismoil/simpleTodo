import { Router } from "express";
import {
    getAllTodoCon,
    getTodoByIdCon,
    addTodoCon,
    updateTodoById,
    deleteTodoById,
} from "../controllers/todo.controller";
const todoRoutes = Router();
todoRoutes.get("/");
todoRoutes.get("/:id");
todoRoutes.post("/:id");
todoRoutes.put("/:id");
todoRoutes.delete("/:id");
export default todoRoutes;
