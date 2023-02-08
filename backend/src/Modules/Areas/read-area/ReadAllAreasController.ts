import { Request, Response } from "express";
import { ReadAllAreas } from "./ReadAllAreas";

export class ReadAllAreasController {
    async handle(req: Request, res: Response) {
        const readAllAreas = new ReadAllAreas();
        const allAreas = await readAllAreas.execute();
        return res.json(allAreas);
    }
    
}