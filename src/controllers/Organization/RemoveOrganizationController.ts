import { Request, Response } from "express";
import { RemoveOrganizationService } from "../../services/Organization/RemoveOrganizationService";

class RemoveOrganizationController {
    async handle(request: Request, response: Response) {
        const organization_id = request?.query.organization_id as string;
        const removeOrganizationService = new RemoveOrganizationService();
        const removeOrganization = removeOrganizationService.execute({ organization_id });
        return response.json({
            message: "Organização removida com sucesso!"
        });
    }
}
export { RemoveOrganizationController };