import { Router } from "express";
import * as taskController from "./task.controller";

const router = Router();

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);

export default router;