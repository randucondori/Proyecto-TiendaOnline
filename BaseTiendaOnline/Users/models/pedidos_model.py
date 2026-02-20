from django.db import models


class PedidosModel(models.Model):
    usuario=models.ForeignKey("UsuarioOrdinario",null=False,blank=False,on_delete=models.CASCADE)
    pedido=models.JSONField(null=True,blank=True,default=list)
    estado=models.CharField(max_length=50,null=False,blank=False,choices=[("pendiente","..."),("cancelado","X"),("entregado","ok")])
    born=models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")

    class Meta:
        db_table="Pedidos"
        verbose_name="Pedidos"
        verbose_name_plural="Pedidos"

    def __str__(self):
        return f"pedido de {self.usuario.email}"