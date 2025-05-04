import { Request, Response } from "express";
import { ShowAssocService } from "../../services/Assoc/ShowAssocService";

class ShowAssocController {
    async handle(request: Request, response: Response) {
        const org = request?.query.org as string;
        const com = request?.query.com as string;
        const dat = request?.query.dat as string;
        const showAssocService = new ShowAssocService();
        const showAssoc = await showAssocService.execute({ org, com, dat });
        return response.json(showAssoc);
    }
}
export { ShowAssocController };