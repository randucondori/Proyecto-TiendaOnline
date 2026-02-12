from django.contrib import admin

from Users.models.ciudades_model import CiudadesModel


class CiudadAdmin(admin.ModelAdmin):
    list_display = ("nombre", "slug")
    list_filter = ("nombre", "slug")
    list_per_page = 20
    readonly_fields = ("slug",)

    fieldsets = (
        ("Ciudad", {"fields": ("nombre",)}),
    )


admin.site.register(CiudadesModel, CiudadAdmin)
