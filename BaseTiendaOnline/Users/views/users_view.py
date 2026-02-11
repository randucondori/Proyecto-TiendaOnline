from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from Users.serealizers import Login_Serializer


class Login(APIView):
    permission_classes = (AllowAny,)
    def post(self,request):
        serialisado=Login_Serializer(data=request.data)
        if serialisado.is_valid():
            data={"email":serialisado.data['email']}
            return Response(data,status=status.HTTP_200_OK)
        else:

            Piedras=serialisado.errors
            print(Piedras)

            return Response(serialisado.errors,status=status.HTTP_400_BAD_REQUEST)