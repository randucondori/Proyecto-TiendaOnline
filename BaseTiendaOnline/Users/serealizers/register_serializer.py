import re

from rest_framework import serializers

from Users.models import UsuarioOrdinario


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=100, required=True)
    nombre = serializers.CharField(max_length=100, required=True)
    apellidos = serializers.CharField(max_length=100, required=True)
    password = serializers.CharField(min_length=8, max_length=100, required=True)
    password0 = serializers.CharField(min_length=8, max_length=100, required=True)

    class Meta:
        model = UsuarioOrdinario
        fields = ("email", "nombre", "apellidos", "password", "password0")

    def validate_email(self, email):
        if not email or email == "":
            return serializers.ValidationError("Es necesario un Email")

        if not re.search(r"^[a-z0-9._]+@[a-z0-9.-]+\.(com|es)$", email):
            raise serializers.ValidationError("Formato de Email Incorrecto")

        return email

    def validate_nombre(self, nombre):
        if not nombre or nombre == "":
            raise serializers.ValidationError({"NombreError": "Es necesario un nombre"})
        return nombre

    def validate_apellidos(self, apellidos):
        if not apellidos or apellidos == "":
            raise serializers.ValidationError({"ApellidosError": "Es necesario un nombre"})
        return apellidos

    def validate_password(self, password):
        if not password or password == "":
            raise serializers.ValidationError({"PasswordError": "Es necesario una Constraseña"})
        return password

    def validate_password0(self, password0):
        if not password0 or password0 == "":
            raise serializers.ValidationError({"PasswordError": "Es necesario introducir la segunda contraseña"})
        return password0

    def validate(self, validated_data):

        password = validated_data.get("password")
        password0 = validated_data.get("password0")

        user=UsuarioOrdinario.objects.filter(email=validated_data["email"]).first()

        if user:
            raise serializers.ValidationError({"ExistError":"Usuario Ya existe"})

        if not password == password0:
            raise serializers.ValidationError({"PasswordsDiferentes": "las contraseñas no son iguales"})

    def create(self, validated_data):

        user = UsuarioOrdinario.objects.create(
            email=validated_data["email"],
            nombre=validated_data["nombre"],
            apellidos=validated_data["apellidos"],
        )

        user.set_password(validated_data["password"])
        user.save()
        return user
