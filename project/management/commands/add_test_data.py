from mixer.backend.django import mixer
from django.core.management.base import BaseCommand

from project.models import Project, ToDO


class Command(BaseCommand):
    help = 'Add data in project and todo'

    def handle(self, *args, **options):
        for i in range(100):
            mixer.blend(Project)
            mixer.blend(ToDO)
        print('data added')
