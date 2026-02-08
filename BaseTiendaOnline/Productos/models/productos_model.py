from django.db import models


class ProductosModels(models.Model):
    nombre= models.CharField(max_length=100,null=False,blank=False,verbose_name="Nombre",)
    precio= models.DecimalField(max_digits=10,decimal_places=2,verbose_name="Precio",)
    categoria= models.ForeignKey("CategoriasModel",on_delete=models.SET_NULL,null=True,blank=False,verbose_name="Categoria",)

    class Meta:
        db_table= "Productos"
        verbose_name="Productos"
        verbose_name_plural="Productos"

    def __str__(self):
        return self.nombre