import { Router, Response, Request } from "express";
import { isAuthenticated } from "./midlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateOrganizationController } from "./controllers/Organization/CreateOrganizationController";
import { EditOrganizationController } from "./controllers/Organization/EditOrganizationController";
import { ListOrganizationController } from "./controllers/Organization/ListOrganizationController";
import { RemoveOrganizationController } from "./controllers/Organization/RemoveOrganizationController";
import { ShowOrganizationByIdController } from "./controllers/Organization/ShowOrganizationByIdController";
import { CreateCompanyController } from "./controllers/Company/CreateCompanyController";
import { EditCompanyController } from "./controllers/Company/EditCompanyController";
import { ListCompanyController } from "./controllers/Company/ListCompanyController";
import { RemoveCompanyController } from "./controllers/Company/RemoveCompanyController";
import { ShowCompanyByIdController } from "./controllers/Company/ShowCompanyByIdController";
import { EditUserController } from "./controllers/user/EditUserController";
import { EditSettingController } from "./controllers/Setting/EditSettingController";
import { ListSettingController } from "./controllers/Setting/ListSettingController";
import multer from "multer";
import uploadConfig from "./config/multer";
import { ListUserController } from "./controllers/user/ListUserController";
import { InsertDataAtmController } from "./controllers/DataAtm/InsertDataAtmController";
import { ShowSaleController } from "./controllers/Sale/ShowSaleController";


const router = Router();
const upload = multer(uploadConfig.upload("./public/images"));

router.get("/teste", (request: Request, response: Response) => {
    return response.json({ ok: true }) as any;
});

router.post('/user', new CreateUserController().handle as any);
router.post('/session', new AuthUserController().handle as any);
router.put('/user/edit', isAuthenticated as any, new EditUserController().handle as any);
router.get('/user/show', isAuthenticated as any, new DetailUserController().handle as any);
router.get('/user/all', isAuthenticated as any, new ListUserController().handle as any);
router.delete('/user/remove', isAuthenticated as any, new RemoveUserController().handle as any);

// Organization
router.post('/organization', isAuthenticated as any, new CreateOrganizationController().handle as any);
router.put('/organization/edit', isAuthenticated as any, new EditOrganizationController().handle as any);
router.get('/organization/show', isAuthenticated as any, new ShowOrganizationByIdController().handle as any);
router.get('/organization/all', isAuthenticated as any, new ListOrganizationController().handle as any);
router.delete('/organization/remove', isAuthenticated as any, new RemoveOrganizationController().handle as any);

// Company
router.post('/company', isAuthenticated as any, new CreateCompanyController().handle as any);
router.put('/company/edit', isAuthenticated as any, new EditCompanyController().handle as any );
router.get('/company/show', isAuthenticated as any, new ShowCompanyByIdController().handle as any);
router.get('/company/all', isAuthenticated as any, new ListCompanyController().handle as any);
router.delete('/company/remove', isAuthenticated as any, new RemoveCompanyController().handle as any);

// Setting
router.get('/setting/show', isAuthenticated as any, new ListSettingController().handle as any);
router.put('/setting/edit', isAuthenticated as any, upload.single("logo"), new EditSettingController().handle as any );

// Inserir dados para métricas de clientes
router.post('/data-atm', new InsertDataAtmController().handle as any);
router.get('/data-sale', isAuthenticated as any, new ShowSaleController().handle as any);

export { router }; 