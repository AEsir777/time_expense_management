from django.db import models

# Create your models here.
class ActivitiyLog(models.Model):
    activity = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    is_compeleted = models.BooleanField(default=False)
    due_time = models.DateTimeField(blank=True)
    
    class PriotyLevel(models.TextChoices):
        LOW = 'low', 'green'
        MEDIUM = 'medium','yellow'
        HIGH = 'high', 'red'
    priority = models.CharField(max_length=6, choices=PriotyLevel.choices, default=PriotyLevel.MEDIUM)


