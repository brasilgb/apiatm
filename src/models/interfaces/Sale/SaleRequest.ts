export interface SaleRequest {
    data: {
        type: string,
        jdata: {
            resumo_cnpj: string;
            resumo_codfil: string;
            resumo_desfil: string;
            resumo_datmvt: string;
            resumo_valdev: string;
            resumo_valven: string;
            resumo_margem: string;
            resumo_presen: string;
            resumo_metdia: string;
            organizationId: string;
        }
    }
}