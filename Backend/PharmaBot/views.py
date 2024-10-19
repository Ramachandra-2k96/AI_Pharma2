from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status
from .models import Chat
from django.contrib.auth.models import User
from django.contrib.auth import authenticate  

class ChatHistoryView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        print(user.username)
        chats = Chat.objects.filter(user=user).order_by('created_at')

        response_data = []
        for chat in chats:
            response_data.append(
                {
                    "id": chat.id,
                    "content": chat.ai_message,
                    "isUser": False,
                    "timestamp": chat.created_at.isoformat() 
                }
            )
            response_data.append(
                {
                    "id": chat.id,
                    "content": chat.user_message,
                    "isUser": True,
                    "timestamp": chat.created_at.isoformat()
                }
            )

        return Response(response_data, status=status.HTTP_200_OK)
def NotFound(request):
    print("not NotFound")
    return render(request,'404.html')

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class LoginView(generics.GenericAPIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return Response({'detail': 'Invalid credentials'}, status=400)
