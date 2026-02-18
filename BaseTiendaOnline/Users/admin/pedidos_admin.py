from django.contrib import admin
from unfold.admin import ModelAdmin

from Users.models import PEdidosModel


class PedidosAdmin(ModelAdmin):
    display=("usuario__nombre","pedido")
    readonly_fields = ("pedido",)

admin.site.register(PEdidosModel,PedidosAdmin)