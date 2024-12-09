import { Router } from "express";
import {
    registerCon,
    loginCon,
    getProfileCon,
} from "../controllers/auth.controller";
const authRouter = Router();
authRouter.post("/signup", registerCon);
authRouter.post("/signin", loginCon);
authRouter.get("/me", getProfileCon);
export default authRouter;
