import { Request, Response } from "express";
import * as userServices from "./user.service";

export const signup = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const token = await userServices.signup(email, password);
        res.json({ token });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    };
};

export const signin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const token = await userServices.signin(email, password);
        res.json({ token });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
