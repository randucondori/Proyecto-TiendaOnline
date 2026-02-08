from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from Productos.models import ProductosModels


class ProductosView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        productos=[{"nombre":p.nombre,"precio":p.precio,"categoria_nombre":p.categoria.nombre} for p in ProductosModels.objects.all()]

        return Response({"productos":productos},status=status.HTTP_200_OK)