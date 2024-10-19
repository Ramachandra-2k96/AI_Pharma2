from django.urls import path
from .views import NotFound, RegisterView, LoginView, ChatHistoryView

urlpatterns = [
    path('', NotFound),
    path('signup/', RegisterView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('chat-history/', ChatHistoryView.as_view(), name='chat-history'),
]