import { prisma } from "../../../../database/PrismaClient";

interface IReadVideoFromArea {
    area_id: number;
}

export class ReadVideoByIDArea {
    async execute({ area_id }: IReadVideoFromArea) {

        const result = await prisma.area_video.findMany({
            where: {
                area_id
            },
        });
        const findedVideos = await prisma.video.findMany({
            where: {
                area_video: {
                    every: {
                        area_id
                    },
                    
                }
            }
        });
        return findedVideos;

    }
}