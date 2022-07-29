import { Request, response, Response } from "express";
import { CreateAreaVideo } from "./CreateAreaVideo";

export class CreateAreaVideoController { 
    async handle(req: Request, res: Response) {
        const { area_id, user_id, video_id, order} = req.body;
        const createAreaVideo = new CreateAreaVideo();
        const result = await createAreaVideo.execute({
            user_id,
            video_id,
            area_id,
            order
        });
        return res.json("Área cadastrada. " + result);
    }
}