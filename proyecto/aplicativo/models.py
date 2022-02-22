from django.db import models

class ProposalItem(models.Model):
    nombrePropuesta = models.CharField(max_length=500)
    tipo = models.CharField(max_length=200)
    gestorComercial = models.CharField(max_length=500)
    monto = models.FloatField()
    estado = models.CharField(max_length=200)
    mesPostulacion = models.CharField(max_length=200)
    FechaVenta = models.DateField()
    gerenteUniNegocio = models.CharField(max_length=200)
    jefeProyecto = models.CharField(max_length=200)
    codigo = models.CharField(max_length=200)
    idCodigo = models.CharField(max_length=200)
    notas = models.CharField(max_length=1000)
    nombreCliente = models.CharField(max_length=200)

class ProyectItem(models.Model):
    nombreProyecto = models.CharField(max_length=500)
    boletaPoliza = models.CharField(max_length=100)
    boletaFielCumplimiento = models.CharField(max_length=100)
    valorUfReferencia = models.FloatField()
    fehaUfReferencia = models.DateField()
    presupuestoDiponible = models.CharField(max_length=200)
    ofertaEconomica = models.CharField(max_length=200)
    distribucion = models.FloatField()  # value for percent;value only float
    duracionProyecto = models.FloatField()
    notas = models.CharField(max_length=1000)
    fechaIniEstimada = models.DateField()
    gav = models.FloatField()  # value for percent;value only float
    estado = models.CharField(max_length=1000)
    codigo = models.CharField(max_length=1000)
    idCodigo = models.CharField(max_length=1000)
    nombreCliente = models.CharField(max_length=200)

class ProyectChiefItem(models.Model):
    nombre = models.CharField(max_length=500)
    idPersona = models.CharField(max_length=100)
    idProyecto = models.CharField(max_length=100)
    rutConsultor = models.CharField(max_length=100)

class ConsultantItem(models.Model):
    nombre = models.CharField(max_length=500)
    idPersona = models.CharField(max_length=100)
    proyectos = models.CharField(max_length=1000)
    rutConsultor = models.CharField(max_length=100)

class PersonItem(models.Model):
    nombre = models.CharField(max_length=500)
    # idPersona = models.CharField(max_length=100)  # va el id de la tabla
    rut = models.CharField(max_length=100)
    correo = models.CharField(max_length=1000)
    direccion = models.CharField(max_length=1000)
    profesion = models.CharField(max_length=500)
    telefono = models.CharField(max_length=100)
    rol = models.CharField(max_length=1000)

##########################################################
class PostulationItem(models.Model):
    # nombre = models.CharField(max_length=500)
    idProyecto = models.CharField(max_length=1000)
    fechaPostulacion = models.DateField()
    mesPostulacion = models.CharField(max_length=100)
    mesAdjudicacion = models.CharField(max_length=100)
    fechaVenta = models.DateField()
    yearVenta = models.CharField(max_length=100)

class ClientItem(models.Model):
    nombreCliente = models.CharField(max_length=500)
    correoCliente = models.CharField(max_length=500)
    # idCliente = models.DateField()  # el sistema por default genera un id por tupla
    idProyecto = models.CharField(max_length=1000)
