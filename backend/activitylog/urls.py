from django.urls import path

import activitylog.api_views

urlpatterns = [
    path('api/', activitylog.api_views.ListALView.as_view(), name='list'),
    path('api/new', activitylog.api_views.CreatALView.as_view(), name='new'),
    path('api/<int:pk>/', activitylog.api_views.RUDALView.as_view(), name='rud'),
]