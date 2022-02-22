import { FormControl, FormGroup, Validators } from "@angular/forms";

export class Propuesta {
    idPropuesta?:number;
    nombrePropuesta?:string;
    tipo?:string;
    gestorComercial?:string;
    monto?:number;
    estado?:string;
    mesPostulacion?:string;
    FechaVenta?:string;
    gerenteUniNegocio?:string;
    jefeProyecto?:string;
    codigo?:string;
    idCodigo?:number;
    notas?:string;
    nombreCliente?:string;

    constructor( propuesta:Propuesta = {} ){
        this.idPropuesta = propuesta?.idPropuesta;
        this.nombrePropuesta = propuesta.nombrePropuesta;
        this.tipo = propuesta?.tipo;
        this.gestorComercial = propuesta?.gestorComercial;
        this.monto = propuesta?.monto;
        this.estado = propuesta?.estado;
        this.mesPostulacion = propuesta?.mesPostulacion;
        this.FechaVenta = propuesta?.FechaVenta;
        this.gerenteUniNegocio = propuesta?.gerenteUniNegocio;
        this.jefeProyecto = propuesta?.jefeProyecto;
        this.codigo = propuesta?.codigo;
        this.idCodigo = propuesta?.idCodigo;
        this.notas = propuesta?.notas;
        this.nombreCliente = propuesta?.nombreCliente;
    }

    static formControl(p: Propuesta){
        return new FormGroup({
            nombrePropuesta: new FormControl(p.nombrePropuesta, [ Validators.required ]),
            tipo: new FormControl(p.tipo, [ Validators.required ]),
            gestorComercial: new FormControl(p.gestorComercial, [Validators.required ]),
            monto: new FormControl(p.monto, [Validators.required ]),
            estado: new FormControl(p.estado, [Validators.required ]),
            mesPostulacion: new FormControl(p.mesPostulacion, [Validators.required ]),
            FechaVenta: new FormControl(p.FechaVenta, [Validators.required ]),
            gerenteUniNegocio: new FormControl(p.gerenteUniNegocio, [Validators.required ]),
            jefeProyecto: new FormControl(''),
            codigo: new FormControl(p.codigo, [Validators.required ]),
            idCodigo: new FormControl(p.idCodigo, [Validators.required ]),
            notas: new FormControl(p.notas, [Validators.required ]),
            nombreCliente: new FormControl(p.nombreCliente, [Validators.required ]),
          });
    }
}
