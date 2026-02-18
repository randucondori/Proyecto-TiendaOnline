from unfold.admin import ModelAdmin
from django.contrib import admin

from Productos.models import CategoriasModel


class CategoriasAdmin(ModelAdmin):
    list_display = ("nombre","slug")
    search_fields = ("nombre","slug")
    list_per_page = 25
    list_filter = ("nombre","slug")
    fieldsets = (
        ("Informacion", {"fields":("nombre",)}),
    )
    add_fieldsets = (
        ("Configuración", {
            'classes': ('wide',),
            'fields': ('nombre',)}
         ),
    )

admin.site.register(CategoriasModel,CategoriasAdmin)