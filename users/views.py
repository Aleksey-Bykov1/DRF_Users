from rest_framework.viewsets import ModelViewSet
from .serializers import CustomSerializers
from .models import CustomUser


class CustomUserViewSet(ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomSerializers

