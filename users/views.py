# from rest_framework.viewsets import ModelViewSet
from .serializers import CustomSerializers
from .models import CustomUser

from rest_framework.generics import RetrieveAPIView, ListAPIView, UpdateAPIView


class UserRetrieveAPIView(RetrieveAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomSerializers


class UserListAPIView(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomSerializers


class UserUpdateAPIView(UpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomSerializers


# class CustomUserViewSet(ModelViewSet):
#     queryset = CustomUser.objects.all()
#     serializer_class = CustomSerializers

