import { prisma } from "../../../database/PrismaClient"

interface IUpdateForm {
    form_id: number,
    title: string,
    description: string,
    link: string
}
export class UpdateForms {
    async execute({title, description, form_id, link}: IUpdateForm) {
        const result = await prisma.form.update({
            where: {
                id: form_id
            },
            data: {
                title,
                link,
                description
            },
        });
        return result;
    }
}