import { Request, Response, NextFunction } from "express"
import { ZodType } from "zod"

export const validate = (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error: any) {
        res.status(400).json({
            message: error.errors?.[0]?.message || "Validation error"
        })
    }
}