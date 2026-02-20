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
        # if not usuario:
        #     raise serializers.ValidationError({"UserError":"Se necesita un usuario para un pedido"})
        return usuario

    def validate_pedido(self,pedido):
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


