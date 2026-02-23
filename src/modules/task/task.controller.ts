import { Request, Response } from "express";
import * as taskService from "./task.service";

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const userId = req.query.userId as string;
        const tasks = await taskService.getAllTasks(userId);
        res.json(tasks);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description, userId } = req.body;
        const newTask = await taskService.createTask(title, description, userId);
        res.status(201).json(newTask);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};