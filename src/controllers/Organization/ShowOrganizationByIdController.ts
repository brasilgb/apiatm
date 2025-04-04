import { Request, Response } from "express";
import { ShowOrganizationByIdService } from "../../services/Organization/ShowOrganizationByIdService";

class ShowOrganizationByIdController {
    async handle(request: Request, response: Response) {
        const organization_id = request?.query.organization_id as string;
        const showOrganizationByIdService = new ShowOrganizationByIdService();
        const showOrganization = await showOrganizationByIdService.execute({ organization_id });
        return response.json(showOrganization);
    }
}
export { ShowOrganizationByIdController };