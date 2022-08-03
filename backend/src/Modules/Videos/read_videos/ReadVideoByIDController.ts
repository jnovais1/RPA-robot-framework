import { Request, Response } from "express";
import { ReadVideoByID } from "./ReadVideoByID"

export class ReadVideoByIDController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        let video_id = Number(id);
        const readVideoById = new ReadVideoByID();
        const video = await readVideoById.execute({
            video_id
        });
        return res.json(video);
    }
}