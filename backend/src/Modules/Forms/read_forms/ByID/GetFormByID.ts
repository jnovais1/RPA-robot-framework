import { prisma } from "../../../../database/PrismaClient";

interface IReadForm {
    form_id: number;
}

export class ReadFormByID {
    async execute({ form_id }: IReadForm) {
        const result = await prisma.form.findUnique({
            where: {
                id: form_id
            },
        });
        return result;
    }
}