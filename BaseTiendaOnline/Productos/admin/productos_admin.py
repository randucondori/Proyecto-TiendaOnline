from django.contrib import admin
from unfold.admin import ModelAdmin
from django.utils.safestring import mark_safe

from Productos.models import ProductosModels


# @admin.register(ProductosModels)
class ProductosAdmin(ModelAdmin):
    list_display = ("nombre","categoria","precio","img")
    list_filter = ("categoria","precio")
    list_editable = ("categoria","precio","img")
    readonly_fields = ("slug",)


admin.site.register(ProductosModels, ProductosAdmin)