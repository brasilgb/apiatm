import prismaClient from "../../prisma";

class InsertDataAtmService {

    async execute(data: any) {

        if (data.type === 'venda') {
            let sale = false;
            const org = await prismaClient.organization.findFirst({
                where: {
                    cnpj: data.jdata[0].resumo_cnpj,
                },
                select: {
                    id: true
                },
            });
            for (const jdata of data.jdata) {
                // Check if the record already exists
                const existingSale = await prismaClient.sale.findFirst({
                    where: {
                        id: org.id + jdata.resumo_codfil + jdata.resumo_cnpj + jdata.resumo_datmvt,
                    },
                });

                if (existingSale) {
                    await prismaClient.sale.updateMany({
                        where: {
                            id: org.id + jdata.resumo_codfil + jdata.resumo_cnpj + jdata.resumo_datmvt,
                        },
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
                            organizationId: org.id
                        },
                    });
                    sale = false;
                } else {
                    await prismaClient.sale.createMany({
                        data: {
                            id: org.id + jdata.resumo_codfil + jdata.resumo_cnpj + jdata.resumo_datmvt,
                            resumo_cnpj: jdata.resumo_cnpj,
                            resumo_codfil: jdata.resumo_codfil,
                            resumo_desfil: jdata.resumo_desfil,
                            resumo_datmvt: jdata.resumo_datmvt,
                            resumo_valdev: jdata.resumo_valdev,
                            resumo_valven: jdata.resumo_valven,
                            resumo_margem: jdata.resumo_margem,
                            resumo_presen: jdata.resumo_presen,
                            resumo_metdia: jdata.resumo_metdia,
                            organizationId: org.id
                        }
                    });
                }
                sale = true;
            }
            if (sale) {
                return { message: 'Dados da venda inseridos com sucesso!' };
            } else {
                return { message: 'Dados da venda atualizados com sucesso!' };
            }
        }
        if (data.type === 'assoc') {
            let assoc = false;
            const org = await prismaClient.organization.findFirst({
                where: {
                    cnpj: data.jdata[0].assoc_cnpj, // Ensure 'resumo_cnpj' corresponds to the 'id' field or adjust schema
                },
                select: {
                    id: true
                },
            });

            for (const jdata of data.jdata) {
                // Check if the record already exists
                const existingAssoc = await prismaClient.association.findFirst({
                    where: {
                        id: org.id + jdata.assoc_filial + jdata.assoc_cnpj + jdata.assoc_datmvt + jdata.assoc_ass,
                    },
                });

                if (existingAssoc) {
                    await prismaClient.association.updateMany({
                        where: {
                            id: org.id + jdata.assoc_filial + jdata.assoc_cnpj + jdata.assoc_datmvt + jdata.assoc_ass
                        },
                        data: {
                            assoc_cnpj: jdata.assoc_cnpj,
                            assoc_filial: jdata.assoc_filial,
                            assoc_datmvt: jdata.assoc_datmvt,
                            assoc_ass: jdata.assoc_ass,
                            assoc_desass: jdata.assoc_desass,
                            assoc_valdev: jdata.assoc_valdev,
                            assoc_valven: jdata.assoc_valven,
                            assoc_margem: jdata.assoc_margem,
                            assoc_repres: jdata.assoc_repres,
                            assoc_metdia: jdata.assoc_metdia,
                            organizationId: org.id
                        },
                    });
                    assoc = false;
                } else {
                    await prismaClient.association.createMany({
                        data: {
                            id: org.id + jdata.assoc_filial + jdata.assoc_cnpj + jdata.assoc_datmvt + jdata.assoc_ass,
                            assoc_cnpj: jdata.assoc_cnpj,
                            assoc_filial: jdata.assoc_filial,
                            assoc_datmvt: jdata.assoc_datmvt,
                            assoc_ass: jdata.assoc_ass,
                            assoc_desass: jdata.assoc_desass,
                            assoc_valdev: jdata.assoc_valdev,
                            assoc_valven: jdata.assoc_valven,
                            assoc_margem: jdata.assoc_margem,
                            assoc_repres: jdata.assoc_repres,
                            assoc_metdia: jdata.assoc_metdia,
                            organizationId: org.id
                        }
                    });
                    assoc = true;
                }
                if (assoc) {
                    return { message: 'Dados de associação inseridos com sucesso!' };
                } else {
                    return { message: 'Dados de associação atualizados com sucesso!' };
                }
            }
            return 'Dados da associacao inseridos com sucesso!';
        }
        if (data.type === 'total') {
            let total = false;
            const org = await prismaClient.organization.findFirst({
                where: {
                    cnpj: data.jdata[0].total_cnpj, // Ensure 'resumo_cnpj' corresponds to the 'id' field or adjust schema
                },
                select: {
                    id: true
                },
            });
            for (const jdata of data.jdata) {
                // Check if the record already exists
                const existingTotal = await prismaClient.total.findFirst({
                    where: {
                        id: org.id + jdata.total_filial + jdata.total_cnpj + jdata.total_datatu,
                    },
                });

                if (existingTotal) {
                    await prismaClient.total.updateMany({
                        where: {
                            id: org.id + jdata.total_filial + jdata.total_cnpj + jdata.total_datatu
                        },
                        data: {
                            total_cnpj: jdata.total_cnpj,
                            total_datatu: jdata.total_datatu,
                            total_filial: jdata.total_filial,
                            total_valdev: jdata.total_valdev,
                            total_valven: jdata.total_valven,
                            total_margem: jdata.total_margem,
                            total_permet: jdata.total_permet,
                            total_projec: jdata.total_projec,
                            total_valjur: jdata.total_valjur,
                            total_perjur: jdata.total_perjur,
                            total_valina: jdata.total_valina,
                            total_perina: jdata.total_perina,
                            total_valest: jdata.total_valest,
                            total_meta: jdata.total_meta,
                            organizationId: org.id
                        },
                    });
                    total = false;
                } else {
                    await prismaClient.total.createMany({
                        data: {
                            id: org.id + jdata.total_filial + jdata.total_cnpj + jdata.total_datatu,
                            total_cnpj: jdata.total_cnpj,
                            total_datatu: jdata.total_datatu,
                            total_filial: jdata.total_filial,
                            total_valdev: jdata.total_valdev,
                            total_valven: jdata.total_valven,
                            total_margem: jdata.total_margem,
                            total_permet: jdata.total_permet,
                            total_projec: jdata.total_projec,
                            total_valjur: jdata.total_valjur,
                            total_perjur: jdata.total_perjur,
                            total_valina: jdata.total_valina,
                            total_perina: jdata.total_perina,
                            total_valest: jdata.total_valest,
                            total_meta: jdata.total_meta,
                            organizationId: org.id
                        }
                    });
                    total = true;
                }
            }
            if (total) {
                return { message: 'Dados totais inseridos com sucesso!' };
            } else {
                return { message: 'Dados totais atualizados com sucesso!' };
            }
        }
    }
}
export { InsertDataAtmService }