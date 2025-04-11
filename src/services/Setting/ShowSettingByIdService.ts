import prismaClient from "../../prisma";

interface ShowSettingByIdRequest {
    setting_id: string;
}

class ShowSettingByIdService {
    async execute({ setting_id }: ShowSettingByIdRequest) {
        const findSettingnByIdService = await prismaClient.setting.findFirst({
            where: {
                id: setting_id
            }
        });

        return findSettingnByIdService;
    }
}
export { ShowSettingByIdService };