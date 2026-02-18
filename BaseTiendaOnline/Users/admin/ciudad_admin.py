from django.contrib import admin
from unfold.admin import ModelAdmin
from Users.models.ciudades_model import CiudadesModel


class CiudadAdmin(ModelAdmin):
    list_display = ("nombre", "slug")
    list_filter = ("nombre", "slug")
    list_per_page = 20
    readonly_fields = ("slug",)

    fieldsets = (
        ("Ciudad", {"fields": ("nombre",)}),
    )


admin.site.register(CiudadesModel, CiudadAdmin)
