import { prisma } from "../../../database/PrismaClient";

interface IReadVideo {
    video_id: number;
}

export class ReadVideoByID {
    async execute({ video_id }: IReadVideo) {
        const result = await prisma.video.findUnique({
            where: {
                id: video_id
            },
        });
        return result;
    }
}