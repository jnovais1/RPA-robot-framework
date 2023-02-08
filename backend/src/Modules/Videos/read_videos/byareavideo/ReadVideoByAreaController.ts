import { Request, Response } from "express";
import { ReadVideoByIDArea } from "./ReadVideoIDArea";

export class ReadVideoByIDAreaController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        let area_id = Number(id);
        
        const readVideoByIDArea = new ReadVideoByIDArea();
        const video = await readVideoByIDArea.execute({
            area_id
        });
        return res.json(video);
    }
}