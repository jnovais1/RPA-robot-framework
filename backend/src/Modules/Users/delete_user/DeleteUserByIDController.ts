import { Request, Response } from "express";
import { DeleteUserByID } from "./DeleteUserByID";

export class DeleteUserByIDController {
    async handle(req: Request, res: Response) {
        const {id} = req.params;

        let user_id: number;    
        user_id = Number(id);
        
        const deleteUserByID = new DeleteUserByID();
        const deletedUser = await deleteUserByID.execute({
            user_id
        });
        return res.json(deletedUser);
    }
}