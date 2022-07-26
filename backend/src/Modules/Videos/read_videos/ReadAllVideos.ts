import { prisma } from "../../../database/PrismaClient";

export class ReadAllVideos {
    async execute() {
        const result = await prisma.video.findMany();
        return result;
    }
}