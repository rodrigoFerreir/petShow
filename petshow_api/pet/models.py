from unicodedata import name
from django.db import models


class Pet(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False)
    history = models.TextField(blank=True, null=True)
    photo = models.URLField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)


