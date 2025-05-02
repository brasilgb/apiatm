import { Request, Response } from "express";
import { ShowSaleService } from "../../services/Sale/ShowSaleService";

class ShowSaleController {
    async handle(request: Request, response: Response) {
        const org_id = request?.query.org_id as string;
        const comp_id = request?.query.comp_id as string;
        const showSaleService = new ShowSaleService();
        const showSale = await showSaleService.execute({ org_id, comp_id });
        return response.json(showSale);
    }
}
export { ShowSaleController };