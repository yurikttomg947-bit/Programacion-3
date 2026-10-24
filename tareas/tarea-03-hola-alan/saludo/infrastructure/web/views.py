from django.http import HttpResponse

from saludo.application.services.saludar_service import SaludarService


def saludar(request):
    caso_de_uso = SaludarService()
    return HttpResponse(caso_de_uso.saludar())
