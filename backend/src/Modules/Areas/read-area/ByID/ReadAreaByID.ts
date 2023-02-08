import { prisma } from "../../../../database/PrismaClient";

interface IReadArea {
    area_id: number;
}

export class ReadAreaByID {
    async execute({ area_id }: IReadArea) {
        const result = await prisma.area.findUnique({
            where: {
                id: area_id
            },
        });
        return result;
    }
}