from django.urls import path

from Users.views.users_view import Login

urlpatterns =[
    path("loguser/",Login.as_view()),
]