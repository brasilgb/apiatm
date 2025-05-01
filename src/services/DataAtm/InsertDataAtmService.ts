
import prismaClient from "../../prisma";

class InsertDataAtmService {

    async execute(data: any) {

        for (const jdata of data.jdata) {
            console.log('item ', jdata);
            const sale = await prismaClient.sale.create({
                data: {
                    resumo_cnpj: jdata.resumo_cnpj,
                    resumo_codfil: jdata.resumo_codfil,
                    resumo_desfil: jdata.resumo_desfil,
                    resumo_datmvt: jdata.resumo_datmvt,
                    resumo_valdev: jdata.resumo_valdev,
                    resumo_valven: jdata.resumo_valven,
                    resumo_margem: jdata.resumo_margem,
                    resumo_presen: jdata.resumo_presen,
                    resumo_metdia: jdata.resumo_metdia,
                } as any
            })
            console.log(sale);
        }
    }
}
export { InsertDataAtmService }