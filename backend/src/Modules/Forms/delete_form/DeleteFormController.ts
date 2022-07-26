import { Request, Response } from "express";
import { DeleteForm } from "./DeleteForm";

export class DeleteFormController {
    async handle(req: Request, res: Response) {
        const {id} = req.params;

        let form_id: number;
        form_id = Number(id);
        
        const deleteForm = new DeleteForm();
        const deletedForm = await deleteForm.execute({
            form_id
        });
        return res.json(deletedForm);
    }
}