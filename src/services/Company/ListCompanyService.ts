import prismaClient from "../../prisma";

class ListCompanyService {
    async execute() {
        const companies = await prismaClient.company.findMany({
            select: {
                id: true,
                altername: true,
                corpreason: true,
                cnpj: true,
                subname: true,
                subnumber: true,
                cep: true,
                state: true,
                city: true,
                district: true,
                street: true,
                number: true,
                complement: true,
                telefone: true,
                status: true,
                whatsapp: true,
                observation: true,
                createdAt: true
            }
        });
        return companies;
    }
}
export { ListCompanyService };