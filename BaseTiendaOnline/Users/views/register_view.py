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
            try:
                serializado.save()
                return Response({"succes": True}, status=status.HTTP_201_CREATED)
            except Exception as e:
                print(e)
                return Response({"success": False}, status=status.HTTP_400_BAD_REQUEST)
        else:

            errores=[]

            for clave, error in serializado.errors.items():
                # errores.append(", ".join(error))
                for err in error:
                    errores.append(str(err))


            return Response({"succes":False,"Error":errores},status=status.HTTP_400_BAD_REQUEST)
