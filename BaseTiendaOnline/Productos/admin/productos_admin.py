from django.contrib import admin
from django.utils.safestring import mark_safe

from Productos.models import ProductosModels


# @admin.register(ProductosModels)
class ProductosAdmin(admin.ModelAdmin):
    list_display = ("nombre","categoria","precio","img")
    list_filter = ("categoria","precio")
    list_editable = ("categoria","precio","img")
    readonly_fields = ("slug",)

    def imagen_tag(self, obj):
        if obj.imagen:
            return mark_safe(f'<img src="{obj.imagen.url}" width="50" height="50" />')
        return "No Image"

    imagen_tag.short_description = 'Imagen'


admin.site.register(ProductosModels, ProductosAdmin)