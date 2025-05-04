import { Request, Response } from "express";
import { ChartCompositeService } from "../../services/Charts/ChartCompositeService";

class ChartCompositeController {
    async handle(request: Request, response: Response) {
        const org = request?.query.org as string;
        const com = request?.query.com as string;
        const my = request?.query.my as string;
        const chartCompositeService = new ChartCompositeService();
        const showTotal = await chartCompositeService.execute({ org, com, my });
        return response.json(showTotal);
    }
}
export { ChartCompositeController };