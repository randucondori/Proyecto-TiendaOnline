from rest_framework import viewsets, status
from rest_framework.response import Response

from Users.models import PedidosModel
from Users.serealizers import PedidosSerializer


class PedidosView(viewsets.ViewSet):

    http_method_names = ['post']

    def create(self,request,):
        serializer = PedidosSerializer(data=request.data,context={'request': request})

        if serializer.is_valid():
            serializer.save()
            return Response({"succes":True},status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

