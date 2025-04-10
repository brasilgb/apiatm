import { Request, Response } from "express";
import { CompanyRequest } from "../../models/interfaces/Company/CompanyRequest";
import { CreateCompanyService } from "../../services/Company/CreateCompanyService";

class CreateCompanyController {

    async handle(request: Request, response: Response) {
        const {corpreason, cnpj, subname, subnumber, cep, state, city, district, street, number, complement, telefone, status, whatsapp, observation, organizationId}: CompanyRequest = request.body;
        const createCompanyService = new CreateCompanyService();
        const company = await createCompanyService.execute({
            corpreason, cnpj, subname, subnumber, cep, state, city, district, street, number, complement, telefone, status, whatsapp, observation, organizationId
        });
        return response.json(company);
    }
}
export { CreateCompanyController };