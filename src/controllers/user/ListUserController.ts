import { Request, Response } from "express";
import { ListUserService } from "../../services/user/ListUserService";

class ListUserController {
    async handle(request: Request, response: Response) {
        const listUserService = new ListUserService();
        const users = await listUserService.execute();
        return response.json(users);
    }
}
export { ListUserController };