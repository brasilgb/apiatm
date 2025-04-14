
import prismaClient from "../../prisma";

class ListSettingService {
    async execute() {
        const existSetting = await prismaClient.setting.count();
        if (!existSetting) {
            await prismaClient.setting.create({
                data: {
                    logo: ""
                }
            })
        }
        const findSettingnByIdService = await prismaClient.setting.findFirst();

        return findSettingnByIdService;
    }
}
export { ListSettingService };