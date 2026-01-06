from django.contrib.auth.models import User
# from requests import Response
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
# from rest_framework.generics import CreateAPIView
# from .models import Scavpost, DailyNaturalist
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]