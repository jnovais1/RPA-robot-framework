import { Request, Response } from "express";
import { AuthenticateUser } from "./Auth-Service";

export class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const authenticateUser = new AuthenticateUser();
        const result = await authenticateUser.execute({
            username,
            password
        });
        return response.json(result);
    }
}