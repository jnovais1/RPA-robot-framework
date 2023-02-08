import { prisma } from "../../../../database/PrismaClient";

interface IReadAreaVideo {
    id: number;
}

export class ReadAreaVideoByID {
    async execute({ id }: IReadAreaVideo) {
        const findedVideos = await prisma.video.findMany({
            where: {
                area_video: { 
                    some: { 
                        area_id: id
                    }
                }
            }
        });
        return findedVideos;
    }
}
