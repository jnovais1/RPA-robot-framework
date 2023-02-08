import { Request, Response } from "express";
import { DeleteAreaOnlyVideo } from "./DeleteOnlyVideo";

export class DeleteAreaVideoOnlyController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

     
        let video_id: number;
        video_id = Number(id);

        const deleteAreaVideoByID = new DeleteAreaOnlyVideo();
        const deletedAreaVideo = await deleteAreaVideoByID.execute({
            video_id
        });
        return res.json(deletedAreaVideo);
    }
}