import { Request, Response } from "express";
import { UpdateAreaVideo } from "./UpdateAreaVideo";

export class UpdateAreaVideoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { user_id, order, video_id } = req.body;

        let area_id: number;
        area_id = Number(id);
        
        const updateAreaVideo = new UpdateAreaVideo();
        const updatedArea = await updateAreaVideo.execute({
            area_id,
            video_id, 
            user_id,
            order
        });
        return res.json(updatedArea);
    }
}