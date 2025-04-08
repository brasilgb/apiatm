import { EditCompanyResquest } from "../../models/interfaces/Company/EditCompanyRequest";
import prismaClient from "../../prisma";

class EditCompanyservice {
    async execute({ company_id, altername, corpreason, cnpj, subname, subnumber, cep, state, city, district, street, number, complement, telefone, status, whatsapp, observation }: EditCompanyResquest) {
        const companyEdited = await prismaClient.company.update({
            where: {
                id: company_id
            },
            data: {
                altername: altername,
                corpreason: corpreason,
                cnpj: cnpj,
                subname: subname,
                subnumber: subnumber,
                cep: cep,
                state: state,
                city: city,
                district: district,
                street: street,
                number: number,
                complement: complement,
                telefone: telefone,
                status: status,
                whatsapp: whatsapp,
                observation: observation
            }
        });

        return companyEdited;
    }
}
export { EditCompanyservice };