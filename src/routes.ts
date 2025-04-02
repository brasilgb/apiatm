import { Router, Response, Request } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { AuthUserController } from "./controller/user/AuthUserController";
import { isAuthenticated } from "./midlewares/isAuthenticated";
import { DetailUserController } from "./controller/user/DetailUserController";
import { RemoveUserController } from "./controller/user/RemoveUserController";

const router = Router();

router.get("/teste", (request: Request, response: Response) => {
    return response.json({ ok: true }) as any;
});

router.post('/user', new CreateUserController().handle as any);
router.post('/session', new AuthUserController().handle as any);
router.get('/me', isAuthenticated as any, new DetailUserController().handle as any);
router.delete('/user/remove', new RemoveUserController().handle as any);

export { router };