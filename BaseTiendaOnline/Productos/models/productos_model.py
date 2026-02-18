from django.db import models
from django.utils.text import slugify


class ProductosModels(models.Model):
    img=models.ImageField(upload_to='image/',blank=False,null=False,verbose_name="Imagen")
    nombre= models.CharField(max_length=100,null=False,blank=False,verbose_name="Nombre",)
    precio= models.DecimalField(max_digits=10,decimal_places=2,verbose_name="Precio",)
    categoria= models.ForeignKey("CategoriasModel",on_delete=models.SET_NULL,null=True,blank=False,verbose_name="Categoria",)
    slug=models.SlugField(unique=True, max_length=100,null=True,blank=True,verbose_name="Slug",)
    favorito=models.PositiveIntegerField(default=0,verbose_name="Favorito",)

    class Meta:
        db_table= "Productos"
        verbose_name="Productos"
        verbose_name_plural="Productos"

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs):

        if self.pk:
            old_img=ProductosModels.objects.filter(pk=self.pk).first()
            if old_img and old_img.img and old_img.img != self.img:
                storage=old_img.img.storage
                if storage.exists(old_img.img.name):
                    storage.delete(old_img.img.name)

        

        slug=f"{self.nombre}{str(self.id)}"
        self.slug=slugify(slug)
        super().save(*args, **kwargs)