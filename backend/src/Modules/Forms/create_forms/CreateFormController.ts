import { Request, Response } from "express";
import { CreateForms } from "./createForms";

export class CreateFormController {
    async handle(request: Request, response: Response) {
        const { title, description, user_id, link } = request.body;
        
        const createForm = new CreateForms();
        const result = await createForm.execute({
            title,
            description,
            user_id,
            link
        });
        return response.json(result);
    }
}