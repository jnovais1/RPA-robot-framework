import { Request, Response } from "express";
import { ReadFormByID } from "./GetFormByID";

export class ReadFormByIDController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        let form_id = Number(id);
        const readFormById = new ReadFormByID();
        const form = await readFormById.execute({
            form_id
        });
        return res.json(form);
    }
}