from rest_framework import serializers
from .models import Project, ToDO
from users.serializers import CustomSerializers


class ProjectSerializer(serializers.ModelSerializer):
    users = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDOSerializer(serializers.ModelSerializer):
    project = ProjectSerializer()
    author = CustomSerializers()

    class Meta:
        model = ToDO
        exclude = ['is_active']
