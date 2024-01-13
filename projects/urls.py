# projects/urls.py
from django.urls import path
from .views import project_view

urlpatterns = [
    path('project/', project_view, name='project_view'),
]
