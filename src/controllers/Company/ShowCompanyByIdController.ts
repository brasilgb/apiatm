import { Request, Response } from "express";
import { ShowCompanyByIdService } from "../../services/Company/ShowCompanyByIdService";

class ShowCompanyByIdController {
    async handle(request: Request, response: Response) {
        const company_id = request?.query.company_id as string;
        const showcompanyByIdService = new ShowCompanyByIdService();
        const showCompany = await showcompanyByIdService.execute({ company_id });
        return response.json(showCompany);
    }
}
export { ShowCompanyByIdController };