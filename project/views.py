from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from .serializers import ProjectSerializer, ToDOSerializer
from .models import Project, ToDO

from rest_framework import mixins
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.viewsets import GenericViewSet
# from project.filters import ToDOFilter


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ToDOLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ToDOViewSet(ModelViewSet):
    queryset = ToDO.objects.all()
    serializer_class = ToDOSerializer
    pagination_class = ToDOLimitOffsetPagination

    def destroy(self, request, *args, **kwargs):
        try:
            obj = self.get_object()
            obj.is_active = False
            obj.save()
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)
