import { Request, Response } from "express";
import { OrganizationRequest } from "../../models/interfaces/Organization/OrganizationRequest";
import { CreateOrganizationService } from "../../services/Organization/CreateOrganizationService";

class CreateOrganizationController {
async handle(request: Request, response: Response){
    const { name, cnpj, status}: OrganizationRequest =request.body;
    const createOrganizationService = new CreateOrganizationService();
    const organization = await createOrganizationService.execute({
        name,cnpj,status
    });
    return response.json(organization);
}
}
export { CreateOrganizationController };