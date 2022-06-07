from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import  HTTP_400_BAD_REQUEST, HTTP_201_CREATED, HTTP_500_INTERNAL_SERVER_ERROR


from .models import Adocao
from adocao.serializers import AdocaoSerializer
from .email_service import send_email_confirmation

class AdocaoList(APIView):
    def get(self, request):
        adocoes = Adocao.objects.all()
        serializer = AdocaoSerializer(adocoes, many=True)
        return Response(serializer.data)
    


class AdocaoCreate(APIView):
    def post(self, request, format=None):
        try:    
            serializer = AdocaoSerializer(data=request.data)

            if serializer.is_valid():
                adocao = serializer.save()
                send_email_confirmation(adocao)
                return Response(serializer.data, status=HTTP_201_CREATED)
            return Response(
                {
                "errors":serializer.errors, 
                "message":"Erro de validação"
                }, 
                status=HTTP_400_BAD_REQUEST)
        except Exception as error:
            return Response(error, status=HTTP_500_INTERNAL_SERVER_ERROR)