import { Propuesta } from "./propuesta";

export class ResponsePropuesta {
    data?:Propuesta[];
    desc?:string;
    status?:string;
    totalItems?:number;

    constructor(r:ResponsePropuesta = {}){
        this.data = r?.data;
        this.desc = r?.desc;
        this.status = r?.status;
        this.totalItems = r?.totalItems;
    }
}
