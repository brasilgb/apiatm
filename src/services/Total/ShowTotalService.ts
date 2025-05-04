import prismaClient from "../../prisma";

interface ShowTotalServiceRequest {
    org : string;
    com : string;
    dat: string;
}

class ShowTotalService {
    async execute({ org, com, dat }: ShowTotalServiceRequest) {
        const showTotalService = await prismaClient.total.findFirst({
            where: {
                organizationId: org,
                total_filial: com,
                total_datatu: dat,
            }
        });

        return showTotalService;
    }
}
export { ShowTotalService };