import { prisma } from "../../../database/PrismaClient";

interface ICreateVideos {
    name: string;
    description: string;
    user_id: number;
    link: string;
}

export class CreateVideos {
    async execute({ name, description, user_id, link }: ICreateVideos) {
        const videoAlreadyExists = await prisma.form.findFirst({
            where: {
                link: link
            }
        });
        if (videoAlreadyExists) {
            throw new Error("Vídeo já existente.")
        } const newVideo = await prisma.video.create({
            data: {
                name,
                description,
                user_id,
                link
            },
        });
        return newVideo;
    }
}