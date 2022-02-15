from django.db import models

from users.models import CustomUser


class Project(models.Model):
    name = models.CharField(max_length=126, unique=True)
    url = models.URLField(null=True, blank=True)
    users = models.ManyToManyField(CustomUser)


class ToDO(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    notice = models.TextField()
    date_of_creation = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(CustomUser, on_delete=models.PROTECT)
    is_active = models.BooleanField(default=True)

