import { OrganizationRequest } from "../../models/interfaces/Organization/OrganizationRequest";
import prismaClient from "../../prisma";

class CreateOrganizationService {
    async execute({ name, cnpj, status }: OrganizationRequest) {
        if (name === "" || name === null || !name) {
            throw new Error("Nome inválido");
        }
        if (cnpj === "" || cnpj === null || !cnpj) {
            throw new Error("CNPJ inválido");
        }

        const organization = await prismaClient.organization.create({
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
        })
        return organization;
    }
}
export { CreateOrganizationService };