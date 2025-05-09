import { Request, Response } from "express";
import { ShowCompanyByOrgService } from "../../services/Company/ShowCompanyByOrgService";

class ShowCompanyByOrgController {
    async handle(request: Request, response: Response) {
        const orgid = request?.query.orgid as string;
        const showCompanyByOrgService = new ShowCompanyByOrgService();
        const showCompany = await showCompanyByOrgService.execute({ orgid });
        return response.json(showCompany);
    }
}
export { ShowCompanyByOrgController };