import { EditSettingRequest } from "../../models/interfaces/Setting/EditSettingRequest";
import prismaClient from "../../prisma";

class EditSettingService {
    async execute({ setting_id, logo }: EditSettingRequest) {

        const existSetting = await prismaClient.setting.count();
        if (existSetting) {
            const settingEdited = await prismaClient.setting.update({
                where: {
                    id: setting_id
                },
                data: {
                    logo: logo
                }
            });
            return settingEdited;
        } else {
            const organization = await prismaClient.setting.create({
                data: {
                    logo: logo
                },
                select: {
                    id: true,
                    logo: true,
                },
            })
            return organization;
        }
    }
}
export { EditSettingService };