import { prisma } from "../../../database/PrismaClient";

export class ReadAllAreas {
    async execute() {
        const result = await prisma.area.findMany();
        return result;
    }

}