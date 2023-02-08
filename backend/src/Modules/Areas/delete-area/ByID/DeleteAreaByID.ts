import { prisma } from "../../../../database/PrismaClient";

interface IDeleteArea {
    area_id: number;
}

export class DeleteAreaByID {
    async execute({ area_id }: IDeleteArea) {
        const result = await prisma.area.delete({
            where: {
                id: area_id
            },
        });
        return result;
    }
}