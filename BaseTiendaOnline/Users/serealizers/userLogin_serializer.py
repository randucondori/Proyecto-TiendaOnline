import re

from rest_framework import serializers

from Users.models import UsuarioOrdinario


class Login_Serializer(serializers.ModelSerializer):
    email=serializers.EmailField(required=True, allow_blank=False,allow_null=False,error_messages={"required":"Email Field"})
    password = serializers.CharField(required=True, allow_blank=False,allow_null=False,error_messages={"required":"Password Field"})

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
            return serializers.ValidationError("La contraseña no puede estar Vacía")
        if len(password)<9:
            raise serializers.ValidationError("La contraseña debe de tener al menos 8 caracteres")

        return password

    def validate(self, data):

        user=UsuarioOrdinario.objects.filter(email=data['email']).first()

        if user:
            if not user.check_password(data['password']):
                raise serializers.ValidationError("Contraseña incorrecta")

            return {"success": True, "data": {"correo": user.email,"apellido": user.apellidos}}
        else:
            raise serializers.ValidationError("Usuario NO encontrado")


