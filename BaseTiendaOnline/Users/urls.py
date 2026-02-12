from django.urls import path

from Users.views import register as Registrarse
from Users.views.users_view import Login as IniciarSesion

urlpatterns =[
    path("loguser/",IniciarSesion.as_view()),
    path("born/",Registrarse.as_view()),
]