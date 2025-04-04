import { RemoveOrganizationRequest } from "../../models/interfaces/Organization/RemoveOrganizationRequest";
import prismaClient from "../../prisma";

class RemoveOrganizationService {
    async execute({ organization_id }: RemoveOrganizationRequest) {
        if (organization_id) {
            const removeOrganization = await prismaClient.organization.delete({
                where: {
                    id: organization_id
                }
            });
            return removeOrganization;
        }
    }
}
export { RemoveOrganizationService };