export interface ProposalItem {
  nombrePropuesta: string;
  tipo: string;
  gestorComercial: string;
  monto: number;
  estado: string;
  mesPostulacion: string;
  fechaVenta: string;
  gerenteUniNegocio: string;
  jefeProyecto: string;
  codigo: string;
  idCodigo: string;
  notas: string;
  nombreCliente: string;
};

export interface ProyectItem {
  nombreProyecto: string;
  boletaPoliza: string;
  boletaFielCumplimiento: string;
  valorUfReferencia: string;
  fehaUfReferencia: string;
  presupuestoDiponible: string;
  ofertaEconomica: string;
  distribucion: number;
  duracionProyecto: string;
  notas: string;
  fechaIniEstimada: string;
  gav: number;
  estado: string;
  codigo: string;
  idCodigo: string;
  nombreCliente: string;
};
export interface ProjectChiefItem {
  nombre: string;
  idPersona: string;
  idProyecto: string;
  rutConsultor: string;
};
