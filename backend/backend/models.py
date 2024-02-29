from django.db import models

class Post(models.Model):
  id = models.AutoField(primary_key=True)
  username = models.CharField(max_length=100)
  created_datetime = models.DateTimeField(auto_now_add=True)
  content = models.TextField()
  title = models.CharField(max_length=100)

  def __str__(self):
    return self.username + ': ' + self.title