import { Request, Response } from "express";
import { UpdateVideos } from "./UpdateVideoByID";

export class UpdateVideoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name, description, link} = req.body;
        
        let video_id: number;
        video_id = Number(id);

        const updateVideo = new UpdateVideos();
        const updatedVideo = await updateVideo.execute({
            video_id,
            name,
            description,
            link
        });
        return res.json(updatedVideo);
    }
}