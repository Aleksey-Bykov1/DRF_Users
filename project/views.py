from rest_framework.viewsets import ModelViewSet
from .serializers import ProjectSerializer, ToDOSerializer
from .models import Project, ToDO

from rest_framework import mixins
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.viewsets import GenericViewSet
from project.filters import ToDOFilter


class ProjectLimitOffsetPaginationViewSet(LimitOffsetPagination):
    default_limit = 10


class ProjectCustomViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                           mixins.UpdateModelMixin, mixins.DestroyModelMixin, GenericViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = ProjectLimitOffsetPaginationViewSet

    def get_queryset(self):
        return Project.objects.filter(name__contains='on')


# class ProjectViewSet(ModelViewSet):
#     queryset = Project.objects.all()
#     serializer_class = ProjectSerializer


class ToDOLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ToDOViewSet(ModelViewSet):
    queryset = ToDO.objects.all()
    serializer_class = ToDOSerializer
    pagination_class = ToDOLimitOffsetPagination
    filterset_class = ToDOFilter
