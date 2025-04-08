import { Request, Response } from "express";
import { CompanyRequest } from "../../models/interfaces/Company/CompanyRequest";
import { CreateCompanyService } from "../../services/Company/CreateCompanyService";

class CreateCompanyController {

    async handle(request: Request, response: Response) {
        const {altername, corpreason, cnpj, subname, subnumber, cep, state, city, district, street, number, complement, telefone, status, whatsapp, observation}: CompanyRequest = request.body;
        const createCompanyService = new CreateCompanyService();
        const company = await createCompanyService.execute({
            altername, corpreason, cnpj, subname, subnumber, cep, state, city, district, street, number, complement, telefone, status, whatsapp, observation
        });
        return response.json(company);
    }
}
export { CreateCompanyController };