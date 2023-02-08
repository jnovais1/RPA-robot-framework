import { Request, Response } from "express";
import { UpdateForms } from "./UpdateAFormByID";

export class UpdateFormController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { title, description, link} = req.body;
        
        let form_id: number;
        form_id = Number(id);

        const updateForm = new UpdateForms();
        const updatedForm = await updateForm.execute({
            form_id,
            title,
            description,
            link
        });
        return res.json(updatedForm);
    }
}