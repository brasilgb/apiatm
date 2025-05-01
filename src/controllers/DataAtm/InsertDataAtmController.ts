import { Request, Response } from "express";
import { InsertDataAtmService } from "../../services/DataAtm/InsertDataAtmService";

class InsertDataAtmController {

    async handle(request: Request, response: Response) {
        const { data } = request.body;
        const insertDataAtmService = new InsertDataAtmService();
        const sale = await insertDataAtmService.execute(data);
        return response.json(sale);
    }
}
export { InsertDataAtmController };