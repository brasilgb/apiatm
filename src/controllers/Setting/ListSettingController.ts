import { Request, Response } from "express";
import { ListSettingService } from "../../services/Setting/ListSettingService";

class ListSettingController {
    async handle(request: Request, response: Response) {
        const listSettingService = new ListSettingService();
        const setting = await listSettingService.execute();
        return response.json(setting);
    }
}
export { ListSettingController };