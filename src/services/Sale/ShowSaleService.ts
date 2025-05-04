import prismaClient from "../../prisma";

interface ShowSaleServiceRequest {
    org : string;
    com: string;
    dat: string;
}

class ShowSaleService {
    async execute({ org, com, dat}: ShowSaleServiceRequest) {
        const showSaleService = await prismaClient.sale.findMany({
            where: {
                organizationId: org,
                resumo_codfil: com,
                resumo_yearmonth: dat,
            }
        });
console.log(showSaleService);

        return showSaleService;
    }
}
export { ShowSaleService };