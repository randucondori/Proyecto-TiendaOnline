from django.urls import path, include
from Productos.views import ProductosView, CategoriasView
from rest_framework.routers import DefaultRouter

user_list = ProductosView.as_view({'get': 'list'})

router = DefaultRouter()
router.register(r'productos', ProductosView, basename='productos')
router.register(r'categorias', CategoriasView, basename='categorias')
urlpatterns = [
    path("",include(router.urls)),
    # path('productos/', ProductosView.as_view()),
    # path('categorias/', CategoriasView.as_view(), ),

]
