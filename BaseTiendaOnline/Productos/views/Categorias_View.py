from rest_framework import status, viewsets
from rest_framework.response import Response


from Productos.models import CategoriasModel


class CategoriasView(viewsets.ModelViewSet):

    queryset = CategoriasModel.objects.all()

    def list(self, request, *args, **kwargs):
        categorias=[{"nombre":c.nombre,"slug":c.slug} for c in self.queryset]

        return Response({'categorias':categorias,"succes":True}, status=status.HTTP_200_OK)