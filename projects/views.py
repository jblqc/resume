# projects/views.py
from django.shortcuts import render

def project_view(request):
    return render(request, 'projects/project.html')
