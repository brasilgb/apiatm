import { Request, Response } from "express";
import { ShowUserByOrgService } from "../../services/user/ShowUserByOrgService";

class ShowUserByOrgController {
    async handle(request: Request, response: Response) {
        const orgid = request?.query.orgid as string;
        const showUserByOrgService = new ShowUserByOrgService();
        const showUser = await showUserByOrgService.execute({ orgid });
        return response.json(showUser);
    }
}
export { ShowUserByOrgController };