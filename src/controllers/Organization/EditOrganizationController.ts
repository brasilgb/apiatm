import { Request, Response } from "express";
import { EditOrganizationService } from "../../services/Organization/EditOrganizationService";

class EditOrganizationController {
async handle(request: Request, response: Response) {
    const { name, cnpj, status } = request.body;
    const organization_id = request.query.organization_id as string;
    const editOrganizationService = new EditOrganizationService();
    const organizationEdit = editOrganizationService.execute({organization_id, name, cnpj, status });
    return response.json(organizationEdit);
}
}

export { EditOrganizationController };