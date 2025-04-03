import prismaClient from "../../prisma";

class ListOrganizationService {
async execute() {
    const organizations = await prismaClient.organization.findMany({
        select: {
            id: true,
            name: true,
            cnpj: true,
            status:true,
            createdAt: true
        }
    });
    return organizations;
}
}
export { ListOrganizationService };