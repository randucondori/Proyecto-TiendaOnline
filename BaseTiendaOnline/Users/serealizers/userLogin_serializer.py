import re

from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from Users.models import UsuarioOrdinario


class Login_Serializer(serializers.ModelSerializer):
    email=serializers.EmailField(required=True, allow_blank=False,allow_null=False,error_messages={"required":"se necesita 'email'"})
    password = serializers.CharField(required=True, allow_blank=False,allow_null=False,error_messages={"required":"se necesita 'password'"})


    class Meta:
        model = UsuarioOrdinario
        fields = ('email','password')

    def validate_email(self,email):
        if not email or email== "":
            return serializers.ValidationError("Es necesario un Email")

        if not re.search(r"^[a-z0-9._]+@[a-z0-9.-]+\.(com|es)$",email):
            raise serializers.ValidationError("Formato de Email Incorrecto")

        return email

    def validate_password(self,password):
        if not password or password == "":
            raise serializers.ValidationError({"PassError":"La contraseña no puede estar Vacía"})
        if len(password)<2:
            raise serializers.ValidationError({"PassError":"La contraseña debe de tener al menos 8 caracteres"})

        return password

    def validate(self, validate_data):
        password= validate_data.get("password")
        email= validate_data.get("email")

        user=UsuarioOrdinario.objects.filter(email=email).first()

        if user:
            if not user.check_password(password):
                raise serializers.ValidationError({"LoginError":"Contraseña incorrecta"})

        if not user:
            raise serializers.ValidationError({"LoginError":"Usuario NO encontrado"})

        refresh = RefreshToken.for_user(user)
        refresh["nombre"] = user.nombre
        refresh["ciudad"] = user.ciudad

        return {
            "success": True,
            "data": {
                "nombre": user.nombre,
                "email": user.email,
                "refreshToken": str(refresh),
                "token": str(refresh.access_token)
            }
        }
