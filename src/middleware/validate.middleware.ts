import { Request, Response, NextFunction } from "express"
import { ZodType, ZodError } from "zod"

export const validate = (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error: any) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: error.issues?.[0]?.message
            })
        }

        res.status(400).json({
            message: "Validation error"
        })
    }
}