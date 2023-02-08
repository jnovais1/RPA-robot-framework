import { response } from "express";
import { prisma } from "../../../../database/PrismaClient";

interface IUpdateAreaVideo {
    area_id: number;
    video_id: number;
    order: number;
    user_id: number;
}
export class UpdateAreaVideo {
    async execute({ area_id, video_id, order, user_id }: IUpdateAreaVideo) {
        if (order > 10) 
            throw new Error ('Uma área não pode possuir mais de 10 vídeos. ');
        
        const updateAreaVideo = await prisma.area_video.deleteMany({
            where: { area_id }
        });

        const updatedAreaVideo = await prisma.area_video.createMany({
            data: {
                area_id,
                video_id,
                order,
                user_id
            }
        });
        return (updatedAreaVideo);
    }
}