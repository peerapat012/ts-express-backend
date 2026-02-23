import { Router } from "express";
import * as taskController from "./task.controller";

const router = Router();

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.put("/status", taskController.updateStatusTask);
router.delete("/", taskController.deleteTask);

export default router;