import { Request, Response } from "express";
import { CreateUsers } from "./CreateUsers";

export class CreateUserController {
    async handle(request: Request, response: Response){
        const { username, password, name, email } = request.body;

       const  createUser = new CreateUsers();
       const result = await createUser.execute({
        username,
        password,
        name,
        email
       });
       return response.json("username: " + username + "  name: " + name + "  email: " + email);
    }
}