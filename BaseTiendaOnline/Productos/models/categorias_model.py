from django.core.exceptions import ValidationError
from django.db import models
from django.utils.text import slugify


class CategoriasModel(models.Model):
    nombre = models.CharField(max_length=30,null=False,blank=False,verbose_name="Nombre",unique=True)
    slug = models.SlugField(max_length=100,null=False,blank=False,verbose_name="Slug",)

    class Meta:
        db_table = "categorias"
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs):
        if self.nombre[0].upper() != self.nombre[0]:
            raise ValidationError({"ErrorBorn":"Los nombres de las categorías deben de iniciar con una mayúscula"})
        if not self.slug:
            self.slug=slugify(self.nombre)
        super().save(*args, **kwargs)


