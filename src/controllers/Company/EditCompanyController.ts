import { Request, Response } from "express";
import { EditCompanyservice } from "../../services/Company/EditCompanyService";

class EditCompanyController {
    async handle(request: Request, response: Response) {
        const { corpreason, cnpj, subname, subnumber, cep, state, city, district, street, number, complement, telefone, status, whatsapp, observation, organizationId } = request.body;
        const company_id = request.query.company_id as string;
        const editCompanyService = new EditCompanyservice();
        const companyEdit = editCompanyService.execute({ company_id, corpreason, cnpj, subname, subnumber, cep, state, city, district, street, number, complement, telefone, status, whatsapp, observation, organizationId });
        return response.json(companyEdit);
    }
}
export { EditCompanyController }