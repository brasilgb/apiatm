import { Request, Response } from "express";
import { EditSettingService } from "../../services/Setting/EditSettingService";

class EditSettingController {
    async handle(request: Request, response: Response) {
        
        const setting_id = request.query.setting_id as string;
        const editSettingService = new EditSettingService();

        const {originalname, filename: logo} = request.file;
        const settingEdit = editSettingService.execute({ setting_id, logo });
        return response.json(settingEdit);
    }
}

export { EditSettingController };