from django.contrib.auth.models import User, Group
from aplicativo.models import ProposalItem
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class ProposalItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProposalItem
        fields = ['id','nombrePropuesta', 'tipo', 'gestorComercial', 'monto', 'estado', 'mesPostulacion', 'FechaVenta', 'gerenteUniNegocio', 'jefeProyecto', 'codigo', 'idCodigo', 'notas', 'nombreCliente']

class ProyectItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProposalItem
        fields = ['id','nombreProyecto', 'boletaPoliza', 'boletaFielCumplimiento', 'valorUfReferencia', 'fehaUfReferencia', 'presupuestoDiponible', 'ofertaEconomica', 'distribucion', 'duracionProyecto','notas', 'fechaIniEstimada', 'gav', 'estado', 'codigo', 'idCodigo', 'nombreCliente']

class ClientItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProposalItem
        fields = ['id','nombreCliente', 'correoCliente', 'idProyecto']
