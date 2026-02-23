import express from "express";
import cors from "cors";
import userRouter from "./modules/user/user.route";
import healthRouter from "./modules/health-check/health.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", healthRouter);
app.use("/api/users", userRouter);


export default app;