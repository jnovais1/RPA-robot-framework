import { prisma } from "../../../database/PrismaClient"

interface IUpdateVideo {
    video_id: number,
    name: string,
    description: string,
    link: string
}
export class UpdateVideos {
    async execute({name, description, video_id, link}: IUpdateVideo) {
        const result = await prisma.video.update({
            where: {
                id: video_id
            },
            data: {
                name,
                link,
                description
            },
        });
        return result;
    }
}