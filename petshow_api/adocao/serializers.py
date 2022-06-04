from rest_framework import serializers

from .models import Adocao
from pet.serializers import PetSerializer
from pet.models import Pet

class AdocaoSerializer(serializers.ModelSerializer):
    pet = PetSerializer(many=False, read_only=True)
    pet_id = serializers.PrimaryKeyRelatedField(many=False, queryset=Pet.objects.all(), write_only=True)

    class Meta:
        model = Adocao
        fields = ('id', 'value', 'email', 'pet', 'pet_id')
    
    def create(self, validated_data):
        validated_data["pet"] = validated_data.pop("pet_id")
        return super().create(validated_data)

    def validate_value(self, value):
        if value < 10:
            raise serializers.ValidationError("Valor mínimo de adoção é R$ 10,00")
        if value > 100:
            raise serializers.ValidationError("Valor máximo de adoção é R$ 100,00")
        return value