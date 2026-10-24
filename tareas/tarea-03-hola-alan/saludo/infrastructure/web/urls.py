from django.urls import path

from saludo.infrastructure.web import views

urlpatterns = [
    path("", views.saludar),
]
