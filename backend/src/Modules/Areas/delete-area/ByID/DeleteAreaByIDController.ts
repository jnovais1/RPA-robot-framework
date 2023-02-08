import { Request, Response } from "express";
import { DeleteAreaByID } from "./DeleteAreaByID";

export class DeleteAreaByIDController {
    async handle(req: Request, res: Response) {
        const {id} = req.params;

        let area_id: number;
        area_id = Number(id);
        
        const deleteAreaByID = new DeleteAreaByID();
        const deletedArea = await deleteAreaByID.execute({
            area_id
        });
        return res.json(deletedArea);
    }
}