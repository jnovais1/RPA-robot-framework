import { Request, Response } from "express";
import { DeleteVideo } from "./DeleteVideoByID";

export class DeleteVideoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        let video_id: number;
        video_id = Number(id);


        const deleteVideo = new DeleteVideo();
        const deletedVideo = await deleteVideo.execute({
            video_id
        });
        return res.json(deletedVideo);
    }
}