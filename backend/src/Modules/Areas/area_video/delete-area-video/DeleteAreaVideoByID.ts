import { prisma } from "../../../../database/PrismaClient";

export interface IDeleteAreaVideo {
    area_id: number;
    video_id: number;   
}

export class DeleteAreaVideo {
    async execute({ area_id, video_id }: IDeleteAreaVideo) {
        const deletedAreaVideo = await prisma.area_video.deleteMany({
            where: {
                video_id, area_id
            }
        })
        return deletedAreaVideo;
    }
}