from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from Users.models.ciudades_model import CiudadesModel


class CiudadView(APIView):
    permission_classes = (AllowAny,)
    def get(self,request):

        big=CiudadesModel.objects.all().order_by('nombre')

        data=[{"nombre":c.nombre,"slug":c.slug} for c in big]

        return Response({"succes":True,"ciudades":data},status=status.HTTP_200_OK)