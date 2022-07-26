import { Request, Response } from "express";
import { DeleteUserByID } from "./DeleteUserByID";

export class DeleteUserByIDController {
    async handle(req: Request, res: Response) {
        const {id} = req.params;

        const deleteUserByID = new DeleteUserByID();
        const deletedUser = await deleteUserByID.execute({
            user_id: Number(id)
        });
        return res.json(deletedUser);
    }   
}