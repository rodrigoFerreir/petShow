from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND, HTTP_201_CREATED
from .models import Pet
from .serializers import PetSerializer

class PetList(APIView):
    def get(self, request, format=None):
        try:
            pets = Pet.objects.all()
            serializer = PetSerializer(pets, many=True)

            return Response(serializer.data, status=HTTP_200_OK)
            
        except Exception as error:
            return Response(error, status=HTTP_400_BAD_REQUEST)


class PetCreate(APIView):
    def post(self, request, format=None):
        try:
            serializer = PetSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=HTTP_201_CREATED)
            return Response({"errors":serializer.errors, "message":"Erro de validação"}, status=HTTP_400_BAD_REQUEST)
        except Exception as error:
            return Response(error, status=HTTP_400_BAD_REQUEST)
