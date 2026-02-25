from django.urls import path, include
from rest_framework import routers

from Users.views import register as Registrarse, CiudadView, PedidosView, MyPedidosView
from Users.views.users_view import Login as IniciarSesion, Login

router = routers.DefaultRouter()
router.register(r'pedidos', PedidosView, basename='pedidos')

urlpatterns =[
    path("loguser/",IniciarSesion.as_view()),
    path("born/",Registrarse.as_view()),
    path("ciudades/",CiudadView.as_view()),
    path("getpedido/",MyPedidosView.as_view()),
    path("",include(router.urls)),

]