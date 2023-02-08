import { Request, Response } from "express";
import { ReadAreaByID } from "./ReadAreaByID";

export class ReadAreaController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        let area_id = Number(id);
        const readAreaById = new ReadAreaByID();
        const area = await readAreaById.execute({
            area_id
        });
        return res.json(area);
    }
}