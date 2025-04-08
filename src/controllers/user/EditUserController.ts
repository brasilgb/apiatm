import { Request, Response } from "express";
import { EditUserRequest } from "../../models/interfaces/user/EditUserRequest";
import { EditUserService } from "../../services/user/EditUserService";

class EditUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password, roles, status, is_admin }: EditUserRequest = request.body;
        const user_id = request.query.user_id as string;
        const editUserService = new EditUserService();
        const userEdit = editUserService.execute({ user_id, name, email, password, roles, status, is_admin });
        return response.json(userEdit);
    }
}
export { EditUserController };