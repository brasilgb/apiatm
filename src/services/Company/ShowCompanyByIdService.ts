import prismaClient from "../../prisma";

interface ShowCompanyByIdRequest {
    company_id: string;
}

class ShowCompanyByIdService {
    async execute({ company_id }: ShowCompanyByIdRequest) {
        const findCompanyByIdService = await prismaClient.company.findFirst({
            where: {
                id: company_id
            }
        });
        
        return findCompanyByIdService
    }
}
export { ShowCompanyByIdService };