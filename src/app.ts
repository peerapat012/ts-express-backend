import express from "express";
import cors from "cors";
import userRouter from "./modules/user/user.route";
import taskRouter from "./modules/task/task.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter)


export default app;