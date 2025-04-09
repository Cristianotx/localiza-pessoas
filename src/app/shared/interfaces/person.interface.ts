type GenderType = "MASCULINO" | "FEMININO" | "OUTRO";

export interface IPerson {
    "id": number,
    "nome": string,
    "idade": number,
    "sexo": GenderType,
    "vivo": true,
    "urlFoto": string,
    "ultimaOcorrencia": {
        "dtDesaparecimento": Date,
        "dataLocalizacao"?: Date,
        "encontradoVivo": false,
        "localDesaparecimentoConcat": string,
        "ocorrenciaEntrevDesapDTO": {
            "informacao"?: string,
            "vestimentasDesaparecido": string
        },
        "listaCartaz"?: any,
        "ocoId": number
    }
}

export interface IResponse {
    "totalPages": number,
    "totalElements": number,
    "pageable": {
        "pageNumber": number,
        "pageSize": number,
        "sort": {
            "unsorted": boolean,
            "sorted": boolean,
            "empty": boolean
        },
        "offset": number,
        "unpaged": boolean,
        "paged": boolean
    },
    "numberOfElements": number,
    "first": boolean,
    "last": boolean,
    "size": number,
    "content": IPerson[],

}

export interface IStatistical {
    quantPessoasDesaparecidas: number;
    quantPessoasEncontradas: number;
}