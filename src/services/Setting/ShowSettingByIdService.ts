import prismaClient from "../../prisma";

interface ShowSettingByIdRequest {
    setting_id: string;
}

class ShowSettingByIdService {
    async execute({ setting_id }: ShowSettingByIdRequest) {
        const existSetting = await prismaClient.setting.count();
        if (!existSetting) {
            const organization = await prismaClient.setting.create({
                data: {
                    logo: ""
                }
            })
            return organization;
        }
        const findSettingnByIdService = await prismaClient.setting.findFirst();

        return findSettingnByIdService;
    }
}
export { ShowSettingByIdService };