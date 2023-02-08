import { prisma } from "../../../../database/PrismaClient";

export interface IDeleteAreaOnlyVideo {
    video_id: number;   
}

export class DeleteAreaOnlyVideo {
    async execute({ video_id }: IDeleteAreaOnlyVideo) {
        const deletedAreaVideo = await prisma.area_video.deleteMany({
            where: {
                video_id
            }
        })
        return deletedAreaVideo;
    }
}