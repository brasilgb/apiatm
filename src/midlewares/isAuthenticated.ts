import { NextFunction, Request, Response } from "express";
import { Payload } from "../models/interfaces/user/auth/Payload";
import { verify } from "jsonwebtoken";

export function isAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
        request.user_id = sub;
        return next();
    } catch (error) {
        return response.send(401).end();
    }
}