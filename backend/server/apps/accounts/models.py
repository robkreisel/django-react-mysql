from cuser.models import AbstractCUser


class User(AbstractCUser):
    pass


User._meta.get_field('email')._unique = True
User._meta.get_field('email').blank = False
User._meta.get_field('email').null = False
