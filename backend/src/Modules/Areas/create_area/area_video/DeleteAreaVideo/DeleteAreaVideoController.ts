import { Request, Response } from "express";
import { DeleteAreaVideo } from "./DeleteAreaVideoByID";

export class DeleteAreaVideoByIDController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        let area_video_id: number;
        area_video_id = Number(id);

        const deleteAreaVideoByID = new DeleteAreaVideo();
        const deletedAreaVideo = await deleteAreaVideoByID.execute({
            area_id: area_video_id
        });
        return res.json(deletedAreaVideo);
    }
}