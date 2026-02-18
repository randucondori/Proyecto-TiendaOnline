from django.urls import path, include
from Productos.views import probando
from rest_framework.routers import DefaultRouter

user_list = probando.as_view({'get': 'list'})

router = DefaultRouter()
router.register(r'productos', probando, basename='productos')
urlpatterns = [
    path("",include(router.urls)),
    # path('productos/', ProductosView.as_view()),
    # path('categorias/', CategoriasView.as_view(), ),

]
