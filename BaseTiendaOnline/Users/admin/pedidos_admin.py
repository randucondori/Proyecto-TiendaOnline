
from django.contrib import admin
from unfold.admin import ModelAdmin

from Users.models import PedidosModel


class PedidosAdmin(ModelAdmin):
    list_display=("usuario__email","pedido","id","estado","pago",)
    readonly_fields = ("pedido",)

admin.site.register(PedidosModel,PedidosAdmin)