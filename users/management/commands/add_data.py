from django.core.management.base import BaseCommand
from users.models import CustomUser


class Command(BaseCommand):
    help = 'Create Superuser and some test users'

    def add_arguments(self, parser):
        parser.add_argument('count', type=int)

    def handle(self, *args, **options):
        CustomUser.objects.all().delete()
        user_count = options['count']
        CustomUser.objects.create_superuser('alex', '1@1.ru', 'test1234test')
        for i in range(user_count):
            CustomUser.objects.create_user(f'user_{i}', f'user_{i}', 'test12345678')
        print('done')
