import { Request, Response } from "express";
import { ReadAllUsers } from "./ReadAllUsers";

export class ReadAllUsersController { 
    async handle(req: Request, res: Response) {
        const readlAllUsers = new ReadAllUsers();
        const allUsers = await readlAllUsers.execute();
        return res.json(allUsers);
    }
}