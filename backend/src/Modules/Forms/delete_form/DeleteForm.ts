import { prisma } from "../../../database/PrismaClient"

interface IDeleteForm {
    form_id: number,

}
export class DeleteForm {
    async execute({ form_id }: IDeleteForm) {
        const result = await prisma.form.delete({
            where: {
                id: form_id
            },
        });
        return result;
    }
}