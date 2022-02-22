export class Consultor {
    idConsultant?:number;
    nombre?:string;
    idPersona?:number;
    proyectos?:string;
    rutConsultor?:string;

    constructor( consultor:Consultor = {} ){
        this.idConsultant = consultor?.idConsultant;
        this.nombre = consultor?.nombre;
        this.idPersona = consultor?.idPersona;
        this.proyectos = consultor?.proyectos;
        this.rutConsultor = consultor?.rutConsultor;
    }
}
