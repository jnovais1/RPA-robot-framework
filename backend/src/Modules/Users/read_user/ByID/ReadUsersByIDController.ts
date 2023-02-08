import { Request, Response } from "express";
import { ReadUsersById } from "./ReadUsersByID";

export class ReadUsersByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const readUsersById = new ReadUsersById();
        const user = await readUsersById.execute({
            user_id: Number(id) 
        });
        return res.json(user);
    } 
}