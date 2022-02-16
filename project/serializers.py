from rest_framework.serializers import ModelSerializer
from .models import Project, ToDO
from users.serializers import CustomSerializers


class ProjectSerializer(ModelSerializer):
    users = CustomSerializers(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDOSerializer(ModelSerializer):
    project = ProjectSerializer()
    author = CustomSerializers()

    class Meta:
        model = ToDO
        exclude = ['is_active']
