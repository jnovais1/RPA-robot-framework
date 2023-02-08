import { hash } from "bcrypt";
import { prisma } from "../../../database/PrismaClient";

interface ICreateUser {
    username: string;
    password: string;
    name: string;
    email: string;
}

export class CreateUsers {

    async execute({ username, password, name, email }: ICreateUser) {
        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                username: username,
            }
        });
        if (userAlreadyExists) {
            throw new Error("Usuário já existente.")

        } const emailAlreadyInUse = await prisma.user.findFirst({
            where: {
                email: email,
            }
        });
        if (emailAlreadyInUse) {
            throw new Error("E-mail já está em uso.")

        } 
        
        const hashPassword = await hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username,
                password: hashPassword,
                email,
                name
            },
        });
        return newUser;
    }
}
