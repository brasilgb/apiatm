import prismaClient from "../../prisma";

interface ShowAssocServiceRequest {
    org : string;
    com: string;
    dat: string;
}

class ShowAssocService {
    async execute({ org, com, dat }: ShowAssocServiceRequest) {
        const showAssocService = await prismaClient.association.findMany({
            where: {
                organizationId: org,
                assoc_filial: com,
                assoc_datmvt: dat,
            }
        });

        return showAssocService;
    }
}
export { ShowAssocService };