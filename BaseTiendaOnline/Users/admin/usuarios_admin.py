from django.contrib import admin
from unfold.admin import ModelAdmin
from Users.models import UsuarioOrdinario


class UserAdmin(ModelAdmin):
    list_display = ("nombre","email","apellidos","ciudad","is_staff","is_superuser")
    list_filter = ("is_staff","is_superuser","is_active")
    ordering = ("nombre","apellidos","is_superuser")
    list_per_page = 10

admin.site.register(UsuarioOrdinario,UserAdmin)