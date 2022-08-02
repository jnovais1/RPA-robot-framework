import { prisma } from "../../../database/PrismaClient";


interface IUpdateArea {
    area_id: number,
    name: string;
    description: string;
}

export class UpdateArea {
    async execute({ area_id, name, description }: IUpdateArea ) {
        const result = await prisma.area.update({
            where: {
                id: area_id
            },
            data: {
                name,
                description
            },
        });
        return result;
    }
}