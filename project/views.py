# from rest_framework.viewsets import ModelViewSet
from .serializers import ProjectSerializer, ToDOSerializer
from .models import Project, ToDO

from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from django.shortcuts import get_object_or_404




# class ProjectViewSet(ModelViewSet):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer
#
#
# class ToDOViewSet(ModelViewSet):
#     queryset = ToDO.objects.all()
#     serializer_class = ToDOSerializer
