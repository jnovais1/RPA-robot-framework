import { Request, Response } from "express";
import { ReadAllForms } from "./ReadAllForms";

export class ReadAllFormsController {
    async handle(req: Request, res: Response) {
        const readAllForms = new ReadAllForms();
        const allForms = await readAllForms.execute();
        return res.json(allForms);
    }

}