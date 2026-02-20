from rest_framework import viewsets, status
from rest_framework.response import Response

from Users.models import PedidosModel
from Users.serealizers import PedidosSerializer


class PedidosView(viewsets.ViewSet):

    http_method_names = ['post', 'create']

    def create(self,request):
        serializer = PedidosSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            print(PedidosModel.objects.first().pedido)
            return Response({"succes":True},status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)