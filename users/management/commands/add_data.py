from django.core.management.base import BaseCommand
from users.models import CustomUser


class Command(BaseCommand):
    help = 'Add users'

    def add_arguments(self, parser):
        parser.add_argument('num', type=int)

    def handle(self, *args, **options):
        CustomUser.objects.all().delete()
        num = options['num']
        CustomUser.objects.create_superuser('alex', '1@1.ru', 'test1234test')
        for i in range(num):
            CustomUser.objects.create_user(f'user_{i}', f'user_{i}', 'test12345678')
        print('Users added')
