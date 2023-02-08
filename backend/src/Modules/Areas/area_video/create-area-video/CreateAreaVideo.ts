import { prisma } from "../../../../database/PrismaClient";

interface ICreateAreaVideo {
    area_id: number;
    user_id: number;
    video_id: number;
    order: number;
}

export class CreateAreaVideo {
    async execute({ area_id, user_id, video_id, order }: ICreateAreaVideo) {
        const maxOrderVideo = order > 10;
        if (maxOrderVideo) {
            throw new Error("Uma área não pode possuir mais de 10 vídeos.")
        }

        const newAreaVideo = await prisma.area_video.create({
            data: {
                area_id,
                order,
                user_id,
                video_id
            },
        })
        const newVideo = await prisma.video.findFirst({
            where: {
                area_video: {
                    some: {
                        video_id
                    }
                }
            }
        })
        return (newVideo);
    }
}