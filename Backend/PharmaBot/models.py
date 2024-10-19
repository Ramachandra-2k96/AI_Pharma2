from django.db import models
from django.contrib.auth.models import User

class Chat(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    user_message = models.CharField(max_length=2056) 
    ai_message = models.CharField(max_length=2056)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Chat between {self.user.username} and AI"

    class Meta:
        verbose_name = 'Chat'
        verbose_name_plural = 'Chats'