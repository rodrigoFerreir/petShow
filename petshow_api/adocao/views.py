from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import  HTTP_400_BAD_REQUEST, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR

from adocao.serializers import AdocaoSerializer

class AdocaoList(APIView):
    def post(self, request, format=None):
        try:    
            serializer = AdocaoSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=HTTP_201_CREATED)
            return Response({"errors":serializer.errors, "message":"Erro de validação"}, status=HTTP_400_BAD_REQUEST)
        except Exception as error:
            return Response(error, status=HTTP_500_INTERNAL_SERVER_ERROR)
