from rest_framework import serializers
from .models import Post
from django.contrib.auth.models import User

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'username', 'title', 'created_datetime', 'content', 'updated_datetime']

class PostSerializerUpdate(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title', 'content']

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User 
        fields = ['id', 'username', 'password', 'email']