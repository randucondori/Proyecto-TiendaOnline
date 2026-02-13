from django.db import models
from django.template.defaultfilters import slugify


class CiudadesModel(models.Model):
    nombre = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)


    class Meta:
        db_table = 'ciudades'
        verbose_name = 'Ciudades'
        verbose_name_plural = 'Ciudades'
        ordering = ['nombre']

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs):
        self.slug=slugify(self.nombre)
        super().save(*args, **kwargs)