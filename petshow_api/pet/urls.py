from django.urls import path


from .views import PetCreate, PetList

urlpatterns = [
    path('', PetList.as_view()),
    path('/create', PetCreate.as_view()),
]