from django.urls import include, path

urlpatterns = [
    path("", include("saludo.infrastructure.web.urls")),
]
