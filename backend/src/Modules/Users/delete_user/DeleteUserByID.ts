import { prisma } from "../../../database/PrismaClient";

interface IDeleteUser {
    user_id: number;
}

export class DeleteUserByID {
    async execute({ user_id }: IDeleteUser) {
        const result = await prisma.user.delete({
            where: {
                'id': user_id
            },
        });
        return result;
    }
}