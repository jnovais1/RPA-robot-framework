import { Request, Response } from "express";
import { CreateAreaVideo } from "./CreateAreaVideo";

export class CreateAreaVideoController { 
    async handle(req: Request, res: Response) {
        
        const { area_id, video_id, user_id, order} = req.body;


        const createAreaVideo = new CreateAreaVideo();
        const result = await createAreaVideo.execute({
            user_id,
            video_id,
            area_id,
            order
        });
        return res.json(result);
    }
}