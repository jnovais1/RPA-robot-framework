import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"
import { prisma } from "../database/PrismaClient";


interface IAuthenticateUser {
    username: string;
    password: string;
}

export class AuthenticateUser {
    async execute({ username, password }: IAuthenticateUser) {
        const user = await prisma.user.findFirst({
            where: {
                username
            }
        });
        if (!user) {
            throw new Error("Usuário inválido. ")
        }
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Senha incorreta. ")
        }
        const token = sign({ username }, process.env.SECRET, {
            subject: username,
            expiresIn: "1d"
        })
        return { token: token, name: user.name, id: user.id };
    }
}
