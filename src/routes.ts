import { Router, Response, Request } from "express";
import { isAuthenticated } from "./midlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateOrganizationController } from "./controllers/Organization/CreateOrganizationController";
import { EditOrganizationController } from "./controllers/Organization/EditOrganizationController";

const router = Router();

router.get("/teste", (request: Request, response: Response) => {
    return response.json({ ok: true }) as any;
});

router.post('/user', new CreateUserController().handle as any);
router.post('/session', new AuthUserController().handle as any);
router.get('/me', isAuthenticated as any, new DetailUserController().handle as any);
router.delete('/user/remove', new RemoveUserController().handle as any);

//Organization
router.post('/organization', isAuthenticated as any, new CreateOrganizationController().handle as any);
router.put('/organization/edit', isAuthenticated as any, new EditOrganizationController().handle as any);

export { router };