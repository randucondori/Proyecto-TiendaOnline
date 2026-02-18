from django.db import models


class PEdidosModel(models.Model):
    usuario=models.ForeignKey("UsuarioOrdinario",null=False,blank=False,on_delete=models.CASCADE)
    pedido=models.JSONField(null=True,blank=True,default=dict)

    class Meta:
        db_table="Pedidos"
        verbose_name="Pedidos"
        verbose_name_plural="Pedidos"

    def __str__(self):
        return f"pedido de {self.usuario.nombre}"