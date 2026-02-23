import { z } from "zod";

export const signupSchema = z.object({
    email: z.email({ message: "Invalid email address" }),
    password: z.string().min(4)
})

export const signinSchema = signupSchema