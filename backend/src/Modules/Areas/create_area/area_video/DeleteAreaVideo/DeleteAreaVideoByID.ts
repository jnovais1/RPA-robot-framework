import { prisma } from "../../../../../database/PrismaClient";

interface IDeleteAreaVideo {
    area_id: number;
}

export class DeleteAreaVideo {
    async execute({ area_id }: IDeleteAreaVideo) {
        const deletedAreaVideo = await prisma.area_video.deleteMany({
            where: {
                area_id
            }
        })
        return deletedAreaVideo;
    }
}