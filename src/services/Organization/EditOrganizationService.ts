import { EditOrganizationRequest } from "../../models/interfaces/Organization/EditOrganizationRequest";
import prismaClient from "../../prisma";

class EditOrganizationService {
    async execute({ organization_id, name, cnpj, status }: EditOrganizationRequest) {
        if (organization_id == "" || name === "" || cnpj === "" || !organization_id || !name || !cnpj) {
            throw new Error("Argumentos obrigatórios devem ser passados");
        }
        const organizationEdited = await prismaClient.organization.update({
            where: {
                id: organization_id
            },
            data: {
                name: name,
                cnpj: cnpj,
                status: status
            },
            select: {
                id: true,
                name: true,
                cnpj: true,
                status: true
            },
        });

        return organizationEdited;
    }
}

export { EditOrganizationService };