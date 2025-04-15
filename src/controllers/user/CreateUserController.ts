import { Request, Response } from "express";
import { UserRequest } from "../../models/interfaces/user/UserRequest";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password, is_admin, roles, status, organizationId, companyId }: UserRequest = request.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            name, email, password, is_admin, roles, status, organizationId, companyId
        });
        return response.json(user);
    }
}

export { CreateUserController };