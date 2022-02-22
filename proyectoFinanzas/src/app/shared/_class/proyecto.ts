export class Proyecto {
    idProyecto?:number;
    nombreProyecto?:string;
    boletaPoliza?:string;
    boletaFielCumplimiento?:string;
    valorUfReferencia?:number;
    fechaUfReferencia?:string;
    presupuestoDisponible?:number;
    ofertaEconomica?:number;
    distribucion?:string;
    duracionProyecto?:string;
    notas?:string;
    fechaIniEstimada?:string;
    gav?:number;
    estado?:string;
    codigo?:string;
    idCodigo?:string;
    nombreCliente?:string;

    constructor( proyecto:Proyecto = {} ){
        this.idProyecto = proyecto?.idProyecto;
        this.nombreProyecto = proyecto?.nombreProyecto;
        this.boletaFielCumplimiento = proyecto?.boletaFielCumplimiento;
        this.valorUfReferencia = proyecto?.valorUfReferencia;
        this.fechaUfReferencia = proyecto?.fechaUfReferencia;
        this.presupuestoDisponible = proyecto?.presupuestoDisponible;
        this.ofertaEconomica = proyecto?.ofertaEconomica;
        this.distribucion = proyecto?.distribucion;
        this.duracionProyecto = proyecto?.duracionProyecto;
        this.notas = proyecto?.notas;
        this.fechaIniEstimada = proyecto?.fechaIniEstimada;
        this.gav = proyecto?.gav;
        this.estado = proyecto?.estado;
        this.codigo = proyecto?.codigo;
        this.idCodigo = proyecto?.idCodigo;
        this.nombreCliente = proyecto?.nombreCliente;
    }
}
