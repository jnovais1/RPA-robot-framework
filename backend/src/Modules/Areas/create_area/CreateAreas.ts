import { create } from "domain";
import { prisma } from "../../../database/PrismaClient";

interface ICreateArea {
    name: string;
    description: string;
    user_id: number;
    video_id: any[];
}
export class CreateAreas {
    async execute({ name, description, user_id, video_id }: ICreateArea) {
        const areaAlreadyExists = await prisma.area.findFirst({
            where: {
                name: name
            }
        });
        if (areaAlreadyExists) {
            throw new Error("Área com mesmo nome já existente.")
        }
        const newArea = await prisma.area.create({
            data: {
                name,
                description,
                user_id,
                area_video: {
                    create: video_id
                }
            },
        });
        return newArea;
    }
}
