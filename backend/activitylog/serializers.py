from rest_framework import serializers
from activitylog.models import ActivitiyLog

class ALSerializer(serializers.ModelSerializer):
    due_time = serializers.DateTimeField(
        required=False,
        input_formats=['%Y %B %d %H:%M'], format=None, allow_null=True,
        help_text='Accepted format is "2022 January 13 19:00"',
        style={'input_type': 'text', 'placeholder': '2022 January 01 00:00'}
    )

    class Meta:
        model = ActivitiyLog
        fields = ['activity', 'description', 'is_compeleted', 'due_time', 'priority']
    
