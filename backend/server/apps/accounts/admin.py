from django.contrib import admin
from cuser.admin import UserAdmin
from .models import User


# Register your models here.
admin.site.register(User, UserAdmin)
