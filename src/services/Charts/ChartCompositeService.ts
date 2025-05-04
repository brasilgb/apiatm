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
            }
        });

        return chartCompositeService;
    }
}
export { ChartCompositeService };