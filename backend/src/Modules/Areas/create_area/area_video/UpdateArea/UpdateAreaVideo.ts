import { prisma } from "../../../../../database/PrismaClient";

interface IUpdateAreaVideo {
    area_id: number;
    video_id: number;
}
export class UpdateAreaVideo {
    async execute({ area_id, video_id }: IUpdateAreaVideo) {
        const findedArea = await prisma.area.findFirst({
            where: {
                id: area_id
            }
        });
        const result = await prisma.area_video.updateMany({
            where: {
                area_id
            },
            data: {
                area_id, video_id
            }
        });
        return result;
    }
}