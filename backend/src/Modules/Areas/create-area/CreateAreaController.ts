import { Request, Response } from "express";
import { CreateAreas } from "./CreateAreas";

export class CreateAreaController {
    async handle(request: Request, response: Response) {
        const { name, description, user_id, video_id, order } = request.body;
        
        const createArea = new CreateAreas();
        const result = await createArea.execute({
            name,
            description,
            user_id,
            video_id,
            order
        });
        return response.json(result);
    }
}