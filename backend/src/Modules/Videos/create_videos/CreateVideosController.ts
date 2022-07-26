import { Request, Response } from "express";
import { CreateVideos } from "./CreateVideos";

export class CreateVideoController {
    async handle(request: Request, response: Response) {
        const { name, description, user_id, link } = request.body;
        
        const createVideos = new CreateVideos();
        const result = await createVideos.execute({
            name,
            description,
            user_id,
            link
        });
        return response.json(result);
    }
}