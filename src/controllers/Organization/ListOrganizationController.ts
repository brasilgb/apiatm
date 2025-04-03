import { Request, Response } from "express";
import { ListOrganizationService } from "../../services/Organization/ListOrganizationService";

class ListOrganizationController {
    async handle(request: Request, response: Response) {
        const listOrganizationService = new ListOrganizationService();
        const organizations = await listOrganizationService.execute();
        return response.json(organizations);
    }
}
export { ListOrganizationController };