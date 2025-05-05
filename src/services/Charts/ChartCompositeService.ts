import prismaClient from "../../prisma";

interface ChartCompositeServiceRequest {
    org : string;
    com : string;
    my : string;
}

class ChartCompositeService {
    async execute({ org, com, my }: ChartCompositeServiceRequest) {
        const chartCompositeService = await prismaClient.sale.findMany({
            where: {
                organizationId: org,
                resumo_codfil: com,
                resumo_yearmonth: my,
            },
            select: {
                id: true,
                resumo_datmvt: true,
                resumo_valven: true,
                resumo_margem: true,
                resumo_metdia: true,
            }
        });

        return chartCompositeService;
    }
}
export { ChartCompositeService };