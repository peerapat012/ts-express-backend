import { users } from "./user.mock"
import { User } from "./user.types"
import bcrypt from "bcryptjs"
import { generateToken } from "../../utils/jwt"
import { v4 as uuidv4 } from "uuid"
import { AppError } from "../../middleware/error.middleware"

export const signup = async (email: string, password: string) => {
    const existingUser = users.find(user => user.email === email);
    if (existingUser) throw new AppError("Email already in use");

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: User = {
        id: uuidv4(),
        email,
        password: hashedPassword
    };

    users.push(newUser);

    return generateToken({ id: newUser.id, email: newUser.email });
}

export const signin = async (email: string, password: string) => {
    const user = users.find(user => user.email === email);
    if (!user) throw new AppError("Invalid credentials", 401);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new AppError("Invalid credentials", 401);

    return generateToken({ id: user.id, email: user.email });
}

export const getUserById = async (id: string): Promise<User | undefined> => {
    return users.find(user => user.id === id);
}

export const getAllUsers = async (): Promise<User[]> => {
    return users;
}