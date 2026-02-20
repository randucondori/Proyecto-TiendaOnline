
from django.contrib import admin
from unfold.admin import ModelAdmin

from Users.models import PedidosModel


class PedidosAdmin(ModelAdmin):
    display=("usuario__nombre","pedido","estado")
    readonly_fields = ("pedido",)

admin.site.register(PedidosModel,PedidosAdmin)