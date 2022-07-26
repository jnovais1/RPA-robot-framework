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
            throw new Error("Usuário ou senha inválidos.")
        }
        const passwordMatch = await compare(password, user.password);
       
        if (!passwordMatch) {
            throw new Error("Usuário ou senha inválidos.")
        }
        const token = sign({username}, "efcc3fff26baa6c8a3b1a37bed92630d", {
            subject: user.username,
            expiresIn: "1d"
        });
        return {Token: token, Name: user.name, ID: user.id};
    }
}