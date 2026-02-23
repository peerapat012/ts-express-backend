import express from "express";
import cors from "cors";
import userRouter from "./modules/user/user.route";
import taskRouter from "./modules/task/task.route";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter)

app.use(errorHandler);


export default app;