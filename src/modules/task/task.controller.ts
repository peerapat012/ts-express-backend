import { Request, Response } from "express";
import * as taskService from "./task.service";
import { z } from "zod";
import { TaskStatus } from "./task.types";

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

export const updateStatusTask = async (req: Request, res: Response) => {
    try {
        const { taskId, status } = req.body;
        z.enum(TaskStatus).parse(status);
        const updatedTask = await taskService.updateTaskStatus(taskId, status);
        res.json(updatedTask);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const { taskId } = req.body;
        await taskService.deleteTask(taskId);
        res.status(204).send();
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}