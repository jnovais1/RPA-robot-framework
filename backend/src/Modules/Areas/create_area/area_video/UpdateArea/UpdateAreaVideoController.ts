import { Request, Response } from "express";
import { UpdateAreaVideo } from "./UpdateAreaVideo";

export class UpdateAreaVideoController {
    async handle(req: Request, res: Response) {
        const { id, id2 } = req.params;

        let area_id: number;
        area_id = Number(id);
        let video_id: number;
        video_id = Number(id2);
        
        const updateAreaVideo = new UpdateAreaVideo();
        const updatedArea = await updateAreaVideo.execute({
            area_id,
            video_id 
        });
        return res.json(updatedArea);
    }
}