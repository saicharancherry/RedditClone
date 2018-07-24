from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers
# import os,django
# os.environ.setdefault("DJANGO_SETTINGS_MODULE","reddit.settings")
# django.setup()

class Community_list(models.Model):
    rid=models.AutoField(primary_key=True)
    rname=models.CharField(max_length=20)
    rfield=models.CharField(max_length=20,unique=True)

    def __str__(self):
        return "Community models..."

class User_registered_comunities(models.Model):
    rid=models.ForeignKey(Community_list,on_delete=models.CASCADE)
    uid=models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return 'User_registered_community'

def get_photo_path():
    return 'C:\\'

class Post(models.Model):
    pid=models.AutoField(primary_key=True)
    uid=models.ForeignKey(User,on_delete=models.CASCADE)
    pdata=models.CharField(max_length=300,null=True)
    pcid=models.ForeignKey(User_registered_comunities,null=True,on_delete=models.SET_NULL)
    community=models.ForeignKey(Community_list,on_delete=models.CASCADE)
    ptime=models.DateTimeField(auto_now=True)
    pimage=models.ImageField(upload_to=get_photo_path,blank=True,null=True)
    upvote=models.IntegerField(default=0)
    downvote = models.IntegerField(default=0)

    def __str__(self):
        return "post section"

class Comment(models.Model):
    cid=models.AutoField(primary_key=True)
    cdata=models.CharField(max_length=500)
    uid=models.ForeignKey(User,on_delete=models.CASCADE)
    pid=models.ForeignKey(Post,on_delete=models.CASCADE)
    ctime=models.DateTimeField()
    child_comment=models.ForeignKey('self',null=True,blank=True,on_delete=True)

    def __str__(self):
        return "comments commited"














