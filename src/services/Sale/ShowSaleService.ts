import prismaClient from "../../prisma";

interface ShowSaleServiceRequest {
    org_id : string;
    comp_id: string;
}

class ShowSaleService {
    async execute({ org_id, comp_id }: ShowSaleServiceRequest) {
        const showSaleService = await prismaClient.sale.findMany({
            where: {
                organizationId: org_id,
                resumo_codfil: comp_id,
            }
        });

        return showSaleService;
    }
}
export { ShowSaleService };