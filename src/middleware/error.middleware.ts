import { Request, Response, NextFunction } from "express"

export class AppError extends Error {
    statusCode: number

    constructor(message: string, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = err.statusCode || 500;

    res.status(status).json({
        message: err.message || "Internal Server Error"
    });
}