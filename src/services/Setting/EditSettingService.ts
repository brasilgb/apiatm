import { EditSettingRequest } from "../../models/interfaces/Setting/EditSettingRequest";
import prismaClient from "../../prisma";
import fs from "fs";
class EditSettingService {
    async execute({ setting_id, logo }: EditSettingRequest) {

        const oldImage = await prismaClient.setting.findUnique({
            where: {
                id: setting_id
            }
        });
        if(oldImage.logo){
            fs.unlinkSync('./public/images/'+ oldImage.logo);
        }
        const settingEdited = await prismaClient.setting.update({
            where: {
                id: setting_id
            },
            data: {
                logo: logo
            }
        });
        return settingEdited;
    }
}
export { EditSettingService };