import { prisma } from "../../../../../database/PrismaClient";

interface IDeleteAreaVideo {
    id: number;
}

export class DeleteAreaVideo {
    async execute({ id }: IDeleteAreaVideo) {
        const result = await prisma.area_video.delete({
            where: {
                id_area_id_video_id: {id}
            }
        });
        return result;
    }
}