export class Cliente {
    idCliente?:number;
    nombreCliente?:string;
    correoCliente?:string;
    idProyecto?:number;


    constructor(cliente:Cliente = {}){
        this.idCliente = cliente?.idCliente;
        this.nombreCliente = cliente?.nombreCliente;
        this.correoCliente = cliente?.correoCliente;
        this.idProyecto = cliente?.idProyecto;
    }
}
