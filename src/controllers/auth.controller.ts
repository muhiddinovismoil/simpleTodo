import { Request, Response } from "express";
import {
    registerService,
    loginService,
    getUserProfileService,
} from "../service/auth.service";
export function registerCon(req: Request, res: Response) {
    try {
        // const registerUser = registerService(req.body);
    } catch (error) {
        console.log(error);
    }
}
export function loginCon(req: Request, res: Response) {
    try {
    } catch (error) {
        console.log(error);
    }
}
export function getProfileCon(req: Request, res: Response) {
    try {
    } catch (error) {
        console.log(error);
    }
}
