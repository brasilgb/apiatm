import prismaClient from "../../prisma";

interface ShowUserByOrgRequest {
    orgid: string;
}

class ShowUserByOrgService {
    async execute({ orgid }: ShowUserByOrgRequest) {
        
        const findUserByOrgService = await prismaClient.user.findMany({
            where: {
                organizationId: orgid
            }
        });
        
        return findUserByOrgService
    }
}
export { ShowUserByOrgService };