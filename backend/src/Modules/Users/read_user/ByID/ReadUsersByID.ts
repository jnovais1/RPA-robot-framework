import { prisma } from "../../../../database/PrismaClient";

interface IReadUsers {
    user_id: number;
}
export class ReadUsersById {
    async execute({user_id}: IReadUsers) {
        const result = await prisma.user.findUnique({
            where: {
                id: user_id
            },
        });
        return result;
    }
}