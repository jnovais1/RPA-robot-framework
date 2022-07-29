import { prisma } from "../../../../../database/PrismaClient";

interface IReadAreaVideo {
    id: number;
}

export class ReadAreaVideoByID {
    async execute({ id }: IReadAreaVideo) {
        const result = await prisma.area_video.findFirst({
            where: {
                id
            },
        });
        return result;
    }
}