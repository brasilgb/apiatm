import { Request, Response } from "express";
import { ShowSettingByIdService } from "../../services/Setting/ShowSettingByIdService";

class ShowSettingByIdController {
    async handle(request: Request, response: Response) {
        const setting_id = request?.query.setting_id as string;
        const showSettingByIdService = new ShowSettingByIdService();
        const showSetting = await showSettingByIdService.execute({ setting_id });
        return response.json(showSetting);
    }
}
export { ShowSettingByIdController };