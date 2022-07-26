import { prisma } from "../../../database/PrismaClient";

interface ICreateForm {
    title: string;
    description: string;
    user_id: number;
    link: string;
}

export class CreateForms {
    async execute({ title, description, user_id, link }: ICreateForm) {
        const formAlreadyExists = await prisma.form.findFirst({
            where: {
                link: link
            }
        });
        if (formAlreadyExists) {
            throw new Error("Formulário já existente.")
        } const newForm = await prisma.form.create({
            data: {
                title,
                description,
                user_id,
                link
            },
        });
        return newForm;
    }
}