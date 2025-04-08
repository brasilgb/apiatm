import { Request, Response } from "express";
import { RemoveCompanyService } from "../../services/Company/RemoveCompanyService";

class RemoveCompanyController {
    async handle(request: Request, response: Response) {
        const company_id = request?.query.company_id as string;
        const removeCompanyService = new RemoveCompanyService();
        const removeCompany = removeCompanyService.execute({ company_id });
        return response.json({
            message: "Filal removida com sucesso!"
        })
    }
}
export { RemoveCompanyController };