import { Router } from "express";
import * as userController from "./user.controller";
import { validate } from "../../middleware/validate.middleware";
import { signinSchema, signupSchema } from "./user.validatetion";

const router = Router();

router.post("/signup", validate(signupSchema), userController.signup);
router.post("/signin", validate(signinSchema), userController.signin);
router.get("/all", userController.getAllUsers);

export default router;