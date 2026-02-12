from rest_framework import serializers

from Users.models.ciudades_model import CiudadesModel


class CiudadSerealizer(serializers.ModelSerializer):
    nombre=serializers.CharField(max_length=50)
    slug=serializers.CharField(max_length=50)


    class Meta:
        model=CiudadesModel

    def validate(self, data):
        return data