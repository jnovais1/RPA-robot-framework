import { prisma } from "../../../database/PrismaClient"

interface IDeleteVideo {
    video_id: number,

}
export class DeleteVideo {
    async execute({ video_id }: IDeleteVideo) {
        const result = await prisma.video.delete({
            where: {
                id: video_id
            },
        });
        return result;
    }
}