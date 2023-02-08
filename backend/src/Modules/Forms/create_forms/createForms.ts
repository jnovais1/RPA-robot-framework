import { url } from "inspector";
import { prisma } from "../../../database/PrismaClient";
import { URLValidator } from "../../../services/Link-Validator";

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
        const urlValidator = new URLValidator();
        if (formAlreadyExists) {
            throw new Error("Formulário já existente.")

        }
        const linkValido = urlValidator.validateUrl(link);
        if (linkValido) {
            const newForm = await prisma.form.create({
                data: {
                    title,
                    description,
                    user_id,
                    link
                },
            });
            return newForm;
        } else {
            throw new Error("Link inválido. ")
        }
    }
}