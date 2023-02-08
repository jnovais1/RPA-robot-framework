import { prisma } from "../../../database/PrismaClient"
import { URLValidator } from "../../../services/Link-Validator";

interface IUpdateForm {
    form_id: number,
    title: string,
    description: string,
    link: string
}
export class UpdateForms {
    async execute({ title, description, form_id, link }: IUpdateForm) {
        const urlValidator = new URLValidator();
        const linkValido = urlValidator.validateUrl(link);
        if (linkValido) {
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
        }else {
            throw new Error("Link inválido. ")
        }
    }
}