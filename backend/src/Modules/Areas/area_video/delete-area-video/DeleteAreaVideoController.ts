import { Request, Response } from "express";
import { DeleteAreaVideo } from "./DeleteAreaVideoByID";

export class DeleteAreaVideoByIDController {
    async handle(req: Request, res: Response) {
        const { id, id2 } = req.params;

        let area_id: number;
        area_id = Number(id);
        let video_id: number;
        video_id = Number(id2);

        const deleteAreaVideoByID = new DeleteAreaVideo();
        const deletedAreaVideo = await deleteAreaVideoByID.execute({
            area_id,
            video_id
        });
        return res.json(deletedAreaVideo);
    }
}