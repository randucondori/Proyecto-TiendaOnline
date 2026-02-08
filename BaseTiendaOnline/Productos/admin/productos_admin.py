from django.contrib import admin
from Productos.models import ProductosModels


# @admin.register(ProductosModels)
class ProductosAdmin(admin.ModelAdmin):
    list_display = ("nombre","categoria","precio")
    list_filter = ("categoria","precio")
    list_editable = ("categoria","precio")
    only_fields = ("nombre",)

admin.site.register(ProductosModels, ProductosAdmin)