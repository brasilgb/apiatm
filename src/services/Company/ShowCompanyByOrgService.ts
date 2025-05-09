import prismaClient from "../../prisma";

interface ShowCompanyByOrgRequest {
    orgid: string;
}

class ShowCompanyByOrgService {
    async execute({ orgid }: ShowCompanyByOrgRequest) {
        
        const findCompanyByOrgService = await prismaClient.company.findMany({
            where: {
                organizationId: orgid
            }
        });
        
        return findCompanyByOrgService
    }
}
export { ShowCompanyByOrgService };