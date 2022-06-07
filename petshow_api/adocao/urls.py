from django.urls import path


from .views import AdocaoCreate, AdocaoList

urlpatterns = [
    path('', AdocaoList.as_view()),
    path('', AdocaoCreate.as_view()),
]