import { Request, Response } from "express";
import { ReadAllVideos } from "./ReadAllVideos";

export class ReadAllVideosController {
    async handle(req: Request, res: Response) {
        const readAllVideos = new ReadAllVideos();
        const allVideos = await readAllVideos.execute();
        return res.json(allVideos);
    }

}