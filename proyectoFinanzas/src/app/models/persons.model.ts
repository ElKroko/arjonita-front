
export interface ConsultantItem {

  nombre: string; 
  idPersona: string;
  proyectos: string;
  rutConsultor: string;

};

export interface PersonItem {

  nombre: string;
  rut: string;
  correo: string;
  direccion: string;
  profesion: string;
  telefono: string;
  rol: string;

};

export interface ClientItem {

  nombreCliente: string;
  correoCliente: string;
  idProyecto: string;
};