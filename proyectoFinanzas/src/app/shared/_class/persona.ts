export class Persona {
    idPersona?:number;
    nombre?:string;
    rut?:string;
    correo?:string;
    direccion?:string;
    profesion?:string;
    telefono?:string;
    rol?:string;

    constructor( persona:Persona = {} ){
        this.idPersona = persona?.idPersona;
        this.nombre = persona?.nombre;
        this.rut = persona?.rut;
        this.correo = persona?.correo;
        this.direccion = persona?.direccion;
        this.profesion = persona?.profesion;
        this.telefono = persona?.telefono;
        this.rol = persona?.rol;
    }
}
