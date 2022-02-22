export class JefeProyecto {
    idProyectChief?:number;
    nombre?:string;
    idPersona?:number;
    idProyecto?:number;
    rutConsultor?:string;

    constructor( jefeProyecto:JefeProyecto = {} ){
        this.idProyectChief = jefeProyecto?.idProyectChief;
        this.nombre = jefeProyecto?.nombre;
        this.idPersona = jefeProyecto?.idPersona;
        this.idProyecto = jefeProyecto?.idProyecto;
        this.rutConsultor = jefeProyecto?.rutConsultor;
    }
}
