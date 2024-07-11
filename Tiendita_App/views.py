from django.shortcuts import render

# Create your views here.

def index(request):
    context={}
    return render(request, 'Tiendita_App/index.html', context)