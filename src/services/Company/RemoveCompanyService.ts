import { RemoveCompanyRequest } from "../../models/interfaces/Company/RemoveCompanyRequest";
import prismaClient from "../../prisma";


class RemoveCompanyService {
async execute({ company_id }: RemoveCompanyRequest) {
    if(company_id) {
        const removeCompany = prismaClient.company.delete({ 
            where: {
                id: company_id
            }
         });
         return removeCompany;
    }
}
}
export { RemoveCompanyService };