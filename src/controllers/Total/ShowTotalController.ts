import { Request, Response } from "express";
import { ShowTotalService } from "../../services/Total/ShowTotalService";

class ShowTotalController {
    async handle(request: Request, response: Response) {
        const org = request?.query.org as string;
        const com = request?.query.com as string;
        const dat = request?.query.dat as string;
        const showTotalService = new ShowTotalService();
        const showTotal = await showTotalService.execute({ org, com, dat });
        return response.json(showTotal);
    }
}
export { ShowTotalController };