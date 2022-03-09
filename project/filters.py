from django_filters import rest_framework as filters
from project.models import ToDO


class ToDOFilter(filters.FilterSet):
    date = filters.DateFromToRangeFilter()

    class Meta:
        model = ToDO
        fields = ['project', 'date_of_creation']
