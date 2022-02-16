from rest_framework.viewsets import ModelViewSet
from .serializers import ProjectSerializer, ToDOSerializer
from .models import Project, ToDO


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ToDOViewSet(ModelViewSet):
    queryset = ToDO.objects.all()
    serializer_class = ToDOSerializer
