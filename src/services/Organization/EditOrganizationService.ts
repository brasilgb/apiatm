import { EditOrganizationRequest } from "../../models/interfaces/Organization/EditOrganizationRequest";
import prismaClient from "../../prisma";

class EditOrganizationService {
    async execute({ organization_id, name, cnpj, status }: EditOrganizationRequest) {

       const organizationEdited = await prismaClient.organization.update({
            where: {
                id: organization_id
            },
            data: {
                name: name,
                cnpj: cnpj,
                status: status 
            }
        });

        return organizationEdited;
    }
}

export { EditOrganizationService };