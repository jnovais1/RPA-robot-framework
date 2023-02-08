import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateUser(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token inválido. "
        });
    }
    const [, token] = authHeader.split(" ")

    try {
        const { sub } = verify(
            token,
            process.env.SECRET
        );

        return next();

    } catch (err) {
        return res.status(401).json({
            message: "Token inválido. "
        });
    }
}
