import prismaClient from "../../prisma";

interface ShowOrganizationByIdRequest {
    organization_id: string;
}

class ShowOrganizationByIdService {
    async execute({ organization_id }: ShowOrganizationByIdRequest) {
        const findProductByCategoryId = await prismaClient.organization.findFirst({
            where: {
                id: organization_id
            }
        });
        // console.log(findProductByCategoryId)
        return findProductByCategoryId;
    }
}
export { ShowOrganizationByIdService };