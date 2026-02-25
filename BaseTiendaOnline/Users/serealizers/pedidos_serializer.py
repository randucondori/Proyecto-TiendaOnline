import ast
import re

from rest_framework import serializers
from Users.models import PedidosModel, UsuarioOrdinario


class PedidosSerializer(serializers.ModelSerializer):
    usuario_id = serializers.IntegerField(required=True,allow_null=False,min_value=0)
    pedido = serializers.JSONField(allow_null=False,default=list)
    estado = serializers.ChoiceField(choices=['pendiente', 'cancelado', 'entregado'],default='pendiente')

    class Meta:
        model = PedidosModel
        fields = ('usuario_id','pedido','estado')

    def validate_usuario_id(self,usuario):

        if not usuario:
            raise serializers.ValidationError({"NullUser":"El usuario no puede estar vacío"})

        user=UsuarioOrdinario.objects.filter(id=usuario).first()

        if not user:
            raise serializers.ValidationError({"NotExistUser":"El usuario no existe"})

        return usuario

    def validate_pedido(self,pedido):

        if not pedido:
            raise serializers.ValidationError({"PedidoVacio":"No se puede crear un pedido vacío"})

        # cache=ast.literal_eval(pedido)
        if not re.search(r"^[\(\)\[\]0-9,]+$",pedido):
            raise serializers.ValidationError({"NoFormatPedido":"El formato del pedido no es correcto [(0,1),(0,1),...]"})
        return pedido

    def validate_estado(self,estado):
        return estado

    def validate(self,data):
        return data

    def create(self,data):

        user=UsuarioOrdinario.objects.filter(id=data["usuario_id"]).first()

        pedido = PedidosModel.objects.create(
            usuario=user,
            pedido=data['pedido'],
            estado=data['estado']
        )

        return pedido


