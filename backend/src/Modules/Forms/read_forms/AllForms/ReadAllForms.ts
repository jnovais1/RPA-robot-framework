import { prisma } from "../../../../database/PrismaClient";

export class ReadAllForms {
    async execute() {
        const result = await prisma.form.findMany();
        return result;
    }
}