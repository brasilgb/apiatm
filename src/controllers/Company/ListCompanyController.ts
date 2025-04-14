import { Request, Response } from "express";
import { ListCompanyService } from "../../services/Company/ListCompanyService";

class ListCompanyController {
    async handle(request: Request, response: Response) {
        const listCompanyService = new ListCompanyService();
        const companies = await listCompanyService.execute();
        return response.json(companies);
    }
}
export { ListCompanyController }; 