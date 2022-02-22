export class Postulacion {
    idPostulacion?:number;
    idProyecto?:number;
    fechaPostulacion?:string;
    mesPostulacion?:string;
    mesAdjudicacion?:string;
    fechaVenta?:string;
    yearVenta?:string;

    constructor(postulacion:Postulacion = {}){
        this.idPostulacion = postulacion?.idPostulacion;
        this.idProyecto = postulacion?.idProyecto;
        this.fechaPostulacion = postulacion?.fechaPostulacion;
        this.mesPostulacion = postulacion?.mesPostulacion;
        this.mesAdjudicacion = postulacion?.mesAdjudicacion;
        this.fechaVenta = postulacion?.fechaVenta;
        this.yearVenta = postulacion?.yearVenta;
    }
}
