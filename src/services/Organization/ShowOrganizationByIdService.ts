import prismaClient from "../../prisma";

interface ShowOrganizationByIdRequest {
    organization_id: string;
}

class ShowOrganizationByIdService {
    async execute({ organization_id }: ShowOrganizationByIdRequest) {
        const findOrganizationByIdService = await prismaClient.organization.findFirst({
            where: {
                id: organization_id
            }
        });

        return findOrganizationByIdService;
    }
}
export { ShowOrganizationByIdService };