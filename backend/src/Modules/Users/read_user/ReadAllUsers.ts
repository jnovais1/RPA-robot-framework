import { prisma } from "../../../database/PrismaClient";

export class ReadAllUsers { 
    async execute() {
        const result = await prisma.user.findMany();
        return result;
    }
}