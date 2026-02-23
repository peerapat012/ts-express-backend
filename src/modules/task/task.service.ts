import { tasks } from "./task.mock";
import { Task, TaskStatus } from "./task.types";
import { v4 as uuidv4 } from "uuid"
import { getUserById } from "../user/user.service";

export const getAllTasks = async (userId: string): Promise<Task[]> => {
    if (!userId) {
        throw new Error("User ID is required");
    }

    const user = await getUserById(userId);
    if (!user) {
        throw new Error("User not found");
    }

    return tasks.filter(task => task.userId === userId && !task.isDeleted);
}

export const createTask = async (title: string, description: string, userId: string): Promise<Task> => {
    if (!title) {
        throw new Error("Title is required");
    }

    const newTask: Task = {
        id: uuidv4(),
        title,
        description,
        status: TaskStatus.TODO,
        userId,
        createAt: new Date(),
        updateAt: new Date(),
        isDeleted: false
    }

    tasks.push(newTask);
    return newTask;
}

export const updateTaskStatus = async (taskId: string, status: TaskStatus): Promise<Task> => {
    const taskIndex = tasks.findIndex(task => task.id === taskId && !task.isDeleted);
    if (taskIndex === -1) {
        throw new Error("Task not found");
    }
    tasks[taskIndex].status = status;
    tasks[taskIndex].updateAt = new Date();
    return tasks[taskIndex];
}

export const deleteTask = async (taskId: string): Promise<void> => {
    const taskIndex = tasks.findIndex(task => task.id === taskId && !task.isDeleted);
    if (taskIndex === -1) {
        throw new Error("Task not found");
    }
    tasks[taskIndex].isDeleted = true;
}