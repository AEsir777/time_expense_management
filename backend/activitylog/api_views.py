from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend

from activitylog.serializers import ALSerializer
from activitylog.models import ActivitiyLog

class ListALView(ListAPIView):
    queryset = ActivitiyLog.objects.all()
    serializer_class = ALSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['activity']

class CreatALView(CreateAPIView):
    serializer_class = ALSerializer

class RUDALView(RetrieveUpdateDestroyAPIView):
    queryset = ActivitiyLog.objects.all()
    lookup_field = 'pk'
    serializer_class = ALSerializer
