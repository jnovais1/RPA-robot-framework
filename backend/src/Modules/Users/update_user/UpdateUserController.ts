import { Request, Response } from "express";
import { UpdateUser } from "./UpdateUserByID";

export class UpdateUserController {
    async handle(req: Request, res: Response) {
        const {id} = req.params;
        const {name, email, password, username} = req.body;

        const updateUser = new UpdateUser();
        const updatedUser = await updateUser.execute({
            user_id: Number(id),
            name,
            email,
            password,
            username
        });
        return res.json(updatedUser);
    }
}