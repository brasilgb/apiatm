import { CompanyRequest } from "../../models/interfaces/Company/CompanyRequest";
import prismaClient from "../../prisma";

class CreateCompanyService {
    async execute({ altername, corpreason, cnpj, subname, subnumber, cep, state, city, district, street, number, complement, telefone, status, whatsapp, observation }: CompanyRequest) {

        const company = await prismaClient.company.create({
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
            },
            select: {
                altername: true,
                corpreason: true,
                cnpj: true,
                subname: true,
                subnumber: true,
                cep: true,
                state: true,
                city: true,
                district: true,
                street: true,
                number: true,
                complement: true,
                telefone: true,
                status: true,
                whatsapp: true,
                observation: true
            }
        })
        return company;
    }
}
export { CreateCompanyService }