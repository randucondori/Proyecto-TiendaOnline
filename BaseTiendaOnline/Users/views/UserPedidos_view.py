from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from Users.models import PedidosModel, UsuarioOrdinario
from Users.serealizers import MisPedidoSerializer


class MyPedidosView(APIView):
    permission_classes = [AllowAny]

    def post(self,request):
        serializado=MisPedidoSerializer(data=request.data)

        if serializado.is_valid():

            usuario=UsuarioOrdinario.objects.filter(id=serializado.data['id_user']).first()
            tablaPedidos=PedidosModel.objects.filter(usuario=usuario).all()
            pedidos=[{"usuario":i.usuario.id,"pedido":i.pedido,"estado":i.estado,"fecha":i.born} for i in tablaPedidos]

            return Response({"succes":True,"pedidos":pedidos},status=status.HTTP_201_CREATED)
        else:
            return Response(serializado.errors, status=status.HTTP_400_BAD_REQUEST)
