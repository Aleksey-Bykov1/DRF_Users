from django_filters import rest_framework as filters
from project.models import ToDO


class ToDOFilter(filters.FilterSet):
    class Meta:
        model = ToDO
        fields = ['project']
