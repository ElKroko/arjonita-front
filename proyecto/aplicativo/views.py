from rest_framework import status
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User, Group
from aplicativo.serializers import UserSerializer, ProposalItemSerializer
from aplicativo.models import ProposalItem,ClientItem,PostulationItem
# from .models import ProyectItem, ProposalItem

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class Proyects(APIView):
    """
    API endpoint that allows Proposal CRUD.
    """
    permission_classes = [permissions.IsAuthenticated]
    proyectFilters = ["explorativo","postulado","cerrado","all"]

    schema = {
        "nombrePropuesta" : "",
        "tipo" : "",
        "gestorComercial" : "",
        "monto" : "",
        "estado" : "",
        "mesPostulacion" : "",
        "FechaVenta" : "",
        "gerenteUniNegocio" : "",
        "jefeProyecto" : "",
        "codigo" : "",
        "idCodigo" : "",
        "notas" : "",
        "nombreCliente" : "",
    }

    def post(self,request,action,value=None):
        # action: add, select, delete, update
        if action in self.proyectFilters:
            if value:
                return Response({"status": "sucess", "desc": "selected proyect; not enabled yet", "data":data}, status=status.HTTP_200_OK)
            else:
                data = request.data
                if action == "explorativo":
                    # self.schema["nombrePropuesta"] = data['nombrePropuesta']
                    # self.schema["tipo"] = data['tipo']
                    # self.schema["gestorComercial"] = data['gestorComercial']
                    # self.schema["monto"] = data['monto']
                    # self.schema["estado"] = data['estado']
                    # self.schema["mesPostulacion"] = data['mesPostulacion']
                    # self.schema["FechaVenta"] = data['FechaVenta']
                    # self.schema["gerenteUniNegocio"] = data['gerenteUniNegocio']
                    # self.schema["codigo"] = data['codigo']
                    # self.schema["idCodigo"] = data['idCodigo']
                    # self.schema["notas"] = data['notas']
                    # self.schema["nombreCliente"] = data['nombreCliente']

                    # item = ProyectItem(nombrePropuesta= data['nombrePropuesta'], tipo= data['tipo'], gestorComercial= data['gestorComercial'], monto= data['monto'], FechaVenta= data['FechaVenta'])
                    # item.save()
                    # itemId = item.id

                    result = {
                        "status" : "succcess",
                        "desc" : "new proyect created",
                        "data": data
                    }

                    return Response(result, status=status.HTTP_200_OK)
                elif action == "select":
                    return Response({"status": "sucess", "desc": "selected proyect; not enabled yet", "data":data}, status=status.HTTP_200_OK)
                elif action == "update":
                    return Response({"status": "sucess", "desc": "updated proyect; not enabled yet", "data":data}, status=status.HTTP_200_OK)
                elif action == "delete":
                    return Response({"status": "sucess", "desc": "deleted proyect; not enabled yet", "data":data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "sucess", "desc": "action failed"}, status=status.HTTP_200_OK)

    def __insertData(self):
        print()

    def __getData(self):
        print()

class Proposal(APIView):
    """
    API endpoint that allows Proposal CRUD.
    """

    actions = ['add','select','update','delete','all']

    schema = {
        "nombrePropuesta" : "",
        "tipo" : "",
        "gestorComercial" : "",
        "monto" : "",
        "estado" : "",
        "mesPostulacion" : "",
        "FechaVenta" : "",
        "gerenteUniNegocio" : "",
        "jefeProyecto" : "",
        "codigo" : "",
        "idCodigo" : "",
        "notas" : "",
        "nombreCliente" : "",
    }

    def post(self,request,action):
        # action: add, select, delete, update
        if action in self.actions:
            data = request.data
            if action == "add":
                self.schema["nombrePropuesta"] = data['nombrePropuesta']
                self.schema["tipo"] = data['tipo']
                self.schema["gestorComercial"] = data['gestorComercial']
                self.schema["monto"] = data['monto']
                self.schema["estado"] = data['estado']
                self.schema["mesPostulacion"] = data['mesPostulacion']
                self.schema["FechaVenta"] = data['FechaVenta']
                self.schema["gerenteUniNegocio"] = data['gerenteUniNegocio']
                self.schema["codigo"] = data['codigo']
                self.schema["idCodigo"] = data['idCodigo']
                self.schema["notas"] = data['notas']
                self.schema["nombreCliente"] = data['nombreCliente']

                item = ProposalItem(nombrePropuesta= data['nombrePropuesta'], tipo= data['tipo'], gestorComercial= data['gestorComercial'], monto= data['monto'], FechaVenta= data['FechaVenta'])
                item.save()
                itemId = item.id

                result = {
                    "status" : "succcess",
                    "desc" : "new proposal created",
                    "data": {
                        "id": itemId,
                        "nombrePropuesta": self.schema["nombrePropuesta"],
                        "tipo": self.schema["tipo"],
                        "gestorComercial": self.schema["gestorComercial"],
                        "monto": self.schema["monto"],
                        "estado": self.schema["estado"],
                        "mesPostulacion": self.schema["mesPostulacion"],
                        "FechaVenta": self.schema["FechaVenta"],
                        "gerenteUniNegocio": self.schema["gerenteUniNegocio"],
                        "codigo": self.schema["codigo"],
                        "idCodigo": self.schema["idCodigo"],
                        "notas": self.schema["notas"],
                        "nombreCliente": self.schema["nombreCliente"],
                    }
                }

                return Response(result, status=status.HTTP_200_OK)
            elif action == "select":
                return Response({"status": "sucess", "desc": "selected proposal", "data":data}, status=status.HTTP_200_OK)
            elif action == "update":
                return Response({"status": "sucess", "desc": "updated proposal", "data":data}, status=status.HTTP_200_OK)
            elif action == "delete":
                return Response({"status": "sucess", "desc": "deleted proposal", "data":data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "sucess", "desc": "action failed"}, status=status.HTTP_200_OK)

    def __insertData(self):
        print()

    def __getData(self):
        print()

class Clients(APIView):
    """
    API endpoint that allows Client CRUD.
    """

    actions = ['add','select','update','delete','all']

    schema = {
        "idCliente" : "",
        "nombreCliente" : "",
        "correoCliente" : "",
        "idProyecto" : "",
    }

    def post(self,request,action):
        # action: add, select, delete, update
        if action in self.actions:
            data = request.data
            if action == "add":
                # self.schema["idCliente"] = data['nombrePropuesta']
                self.schema["nombreCliente"] = data['nombreCliente']
                self.schema["correoCliente"] = data['correoCliente']
                self.schema["idProyecto"] = data['idProyecto']

                item = ClientItem(nombreCliente= data['nombreCliente'], correoCliente= data['correoCliente'], idProyecto= data['idProyecto'])
                item.save()
                itemId = item.id

                result = {
                    "status" : "succcess",
                    "desc" : "new client created",
                    "data": {
                        "idCliente": itemId,
                        "nombreCliente": self.schema["nombreCliente"],
                        "correoCliente": self.schema["correoCliente"],
                        "idProyecto": self.schema["idProyecto"],
                    }
                }

                return Response(result, status=status.HTTP_200_OK)
            elif action == "select":
                return Response({"status": "sucess", "desc": "selected client", "data":data}, status=status.HTTP_200_OK)
            elif action == "update":
                return Response({"status": "sucess", "desc": "updated client", "data":data}, status=status.HTTP_200_OK)
            elif action == "delete":
                return Response({"status": "sucess", "desc": "deleted client", "data":data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "sucess", "desc": "action failed"}, status=status.HTTP_200_OK)

class Postulations(APIView):
    """
    API endpoint that allows Client CRUD.
    """

    actions = ['add','select','update','delete','all']

    schema = {
        "idPostulacion" : "",
        "idProyecto" : "",
        "fechaPostulacion" : "",
        "mesPostulacion" : "",
        "mesAdjudicacion" : "",
        "fechaVenta" : "",
        "yearVenta" : "",
    }

    def post(self,request,action):
        # action: add, select, delete, update
        if action in self.actions:
            data = request.data
            if action == "add":
                # self.schema["idCliente"] = data['nombrePropuesta']
                self.schema["idProyecto"] = data['idProyecto']
                self.schema["fechaPostulacion"] = data['fechaPostulacion']
                self.schema["mesPostulacion"] = data['mesPostulacion']
                self.schema["mesAdjudicacion"] = data['mesAdjudicacion']
                self.schema["fechaVenta"] = data['fechaVenta']
                self.schema["yearVenta"] = data['yearVenta']

                item = PostulationItem(idProyecto= data['idProyecto'], fechaPostulacion= data['fechaPostulacion'], mesPostulacion= data['mesPostulacion'], mesAdjudicacion= data['mesAdjudicacion'], fechaVenta= data['fechaVenta'], yearVenta= data['yearVenta'])
                item.save()
                itemId = item.id

                result = {
                    "status" : "succcess",
                    "desc" : "new postulation created",
                    "data": {
                        "idPostulacion": itemId,
                        "idProyecto": self.schema["idProyecto"],
                        "fechaPostulacion": self.schema["fechaPostulacion"],
                        "mesPostulacion": self.schema["mesPostulacion"],
                        "mesAdjudicacion": self.schema["mesAdjudicacion"],
                        "fechaVenta": self.schema["fechaVenta"],
                        "yearVenta": self.schema["yearVenta"],
                    }
                }

                return Response(result, status=status.HTTP_200_OK)
            elif action == "select":
                return Response({"status": "sucess", "desc": "selected postulation", "data":data}, status=status.HTTP_200_OK)
            elif action == "update":
                return Response({"status": "sucess", "desc": "updated postulation", "data":data}, status=status.HTTP_200_OK)
            elif action == "delete":
                return Response({"status": "sucess", "desc": "deleted postulation", "data":data}, status=status.HTTP_200_OK)
        else:
            return Response({"status": "sucess", "desc": "action failed"}, status=status.HTTP_200_OK)

class Auth(APIView):
    """
    API endpoint google authentication.
    """
    # permission_classes = [permissions.IsAuthenticated]
    def post(self,request,userCredentials=None):
        ##### BI Code here #####
        return Response({"status": "success", "desc": "User Authenticated", "token": "alskdjabi2hd65zxmcnbt2"}, status=status.HTTP_200_OK)
    
#####################
####### NOTES #######

# check serializer for APIView
# class CartItemViews(APIView):
#     ...
#
#     def get(self, request, id=None):
#         if id:
#             item = CartItem.objects.get(id=id)
#             serializer = CartItemSerializer(item)
#             return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
#
#         items = CartItem.objects.all()
#         serializer = CartItemSerializer(items, many=True)
#         return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK) status=status.HTTP_200_OK)
