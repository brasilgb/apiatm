import { Router, Response, Request } from "express";

const router = Router();

router.get("/me", (request: Request, response: Response) => {
    return response.json({ok: true}) as any;
});

export { router };