import { Request, Response } from "express";
import { UpdateArea } from "./UpdateArea";

export class UpdateAreaController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name, description } = req.body;
        
        let area_id: number;
        area_id = Number(id);
        
        const updateArea = new UpdateArea();
        const updatedArea = await updateArea.execute({
            area_id,
            name,
            description
        });
        return res.json(updatedArea);
    }
}