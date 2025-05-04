import { Request, Response } from "express";
import { ShowSaleService } from "../../services/Sale/ShowSaleService";

class ShowSaleController {
    async handle(request: Request, response: Response) {
        const org = request?.query.org as string;
        const com = request?.query.com as string;
        const dat = request?.query.dat as string;
        const showSaleService = new ShowSaleService();
        const showSale = await showSaleService.execute({ org, com, dat });
        return response.json(showSale);
    }
}
export { ShowSaleController };