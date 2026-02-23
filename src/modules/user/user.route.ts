import { Router } from "express";
import * as userController from "./user.controller";

const router = Router();

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);

export default router;