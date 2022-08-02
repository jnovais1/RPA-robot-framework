import { Request, Response } from "express";
import { ReadAreaVideoByID } from "./ReadAreaVideoByID";

export class ReadAreaVideoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        let numberID = Number(id);
        const readAreaVideoById = new ReadAreaVideoByID();
        const areaVideo = await readAreaVideoById.execute({
            id: numberID
        });
        return res.json(areaVideo);
    }
}