from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'username', 'title', 'created_datetime', 'content']

class PostSerializerUpdate(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title', 'content']