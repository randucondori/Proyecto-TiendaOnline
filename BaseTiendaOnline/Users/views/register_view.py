from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from Users.serealizers.register_serializer import RegisterSerializer


class register(APIView):
    permission_classes =[AllowAny]
    def post(self,request):
        serializado=RegisterSerializer(data=request.data)
        if serializado.is_valid():
            return Response({"succes":True},status=status.HTTP_201_CREATED)
        else:
            return Response({"succes":False,"Error":serializado.errors},status=status.HTTP_304_NOT_MODIFIED)
