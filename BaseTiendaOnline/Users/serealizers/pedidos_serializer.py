import ast
import re
from decimal import Decimal

from rest_framework import serializers

from Productos.models import ProductosModels
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

        if not re.search(r"^[\[\]0-9,\s]+$",str(pedido)):
            raise serializers.ValidationError({"NoFormatPedido":"El formato del pedido no es correcto [[0,1],[0,1],...]"})
        return pedido

    def validate_estado(self,estado):
        return estado

    def validate(self,data):
        return data

    def create(self,data):

        pedido=data['pedido']

        pack=self.cernir(pedido) # [ids,cantidades]

        products=ProductosModels.objects.filter(id__in=pack[0])

        precios=[p.precio for p in products]

        repedido=[]

        for i in range(len(products)):
            repedido.append([products[i].nombre,float(products[i].precio),pack[1][i]])
        total=0

        for i in range (len(precios)):
            total+=precios[i]*pack[1][i]

        total=self.neto(total)

        user=UsuarioOrdinario.objects.filter(id=data["usuario_id"]).first()


        pedido = PedidosModel.objects.create(
            usuario=user,
            pedido=repedido,
            estado=data['estado'],
            pago=total,
        )

        return pedido


    def cernir(self,pedido):

        ids = [i[0] for i in pedido]
        cantidades = [c[1] for c in pedido]

        return [ids,cantidades]

    def neto(self,press):
        total = press + (press * Decimal('0.07')) + (press * Decimal('0.17'))

        return round(total,2)