import { prisma } from "../../../database/PrismaClient";

interface IUpdateUser {
    user_id: number;
    name: string;
    username: string;
    email: string;
    password: string;
}

export class UpdateUser {
    async execute({user_id, name, username, email, password}: IUpdateUser) {
        const result = await prisma.user.update({
            where: {
                'id': user_id
            },
            data: {
                name,
                username,
                email,
                password
            },
        });
        return result;
    }
}