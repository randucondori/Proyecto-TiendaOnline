from rest_framework import serializers

from Users.models import PedidosModel


class MisPedidoSerializer(serializers.ModelSerializer):
    id_user = serializers.IntegerField(required=True, )

    class Meta:
        model = PedidosModel
        fields = ("id_user",)

    def validate_id_user(self, id_user):
        try:
            resp = int(id_user)

            if resp:
                return id_user
        except ValueError:
            raise serializers.ValidationError({"ValueError": "Numero no valido"})

    def validate(self, data):

        return data
