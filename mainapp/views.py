from django.shortcuts import render
from mainapp.models import *
from django.db.models import Q
from django.http import HttpResponse,JsonResponse
from django.shortcuts import *
from django.contrib.auth.models import User
from rest_framework import serializers ,status
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone
import django
from rest_framework.generics import CreateAPIView
class communitylist_rest(serializers.ModelSerializer):
    class Meta:
        model=Community_list
        fields=('rid','rfield','isuser')


class user_rest(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('username',)

class post_rest(serializers.ModelSerializer):
    #user=user_rest()
    class Meta:
        model=Post
        #fields=('pid')#('pid', 'uid__username', 'pcid__rid__rname','pdata','ptime')#('pid', 'uid', 'pcid','pdata','ptime')


class user_registered_rest(serializers.ModelSerializer):
    #post=post_rest
    class Meta:
        model=User_registered_comunities


class Create_post_rest(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields=('uid','pdata','pcid','ptime')

    def create(self, validated_data):
        userobj=User.objects.get(id=validated_data.get('uid'))
        registerobj=User_registered_comunities.objects.get(id=validated_data.get('pcid'))
        p=Post.objects.create(uid=userobj,pdata=validated_data.get('pdata'),pcid=registerobj,ptime=timezone.now())
        p.save()

class Signup_rest(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('username','password','email',)

    def create(self, validated_data):
        userobj = User.objects.create_user(username=validated_data.get('username'),email=validated_data.get('email'),password=validated_data.get('password'))
        userobj.save()


            # def create(self, validated_data):
    #     u=User.objects.create_user(username=validated_data.username,password=validated_data.password,email=validated_data.email)
    #     u.save()
from rest_framework.decorators import api_view

from rest_framework import permissions

class create_auth(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, *args, **kwargs):
        serializer = Signup_rest(request.data)
        serializer.create(serializer.data)
        return JsonResponse({"status":serializer.data.get('username')}, status=201)


class SubscribeCommunity(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self,request,*args,**kwargs):
        cl=Community_list.objects.all()
        serializer=communitylist_rest(data=cl,many=True)
        serializer.is_valid()
        return HttpResponse(JSONRenderer().render(serializer.data))

    def post(self,request,*args,**kwargs,):
        data=request.data
        c=Community_list.objects.get(rid=int(data['rid']))
        u=User.objects.get(username=data['username'])
        urc=User_registered_comunities.objects.filter(rid=c,uid=u)
        if not urc.values():
            urc=User_registered_comunities.objects.create(rid=c,uid=u)
            urc.save()
        else:
            urc.delete()
        return HttpResponse(status=200)







class get_Privatecommunitylist(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self,request,*args,**kwargs):
        cl=Community_list.objects.values()
        urc=User_registered_comunities.objects.filter(uid__username=request._user).values('rid')
        # s=set(list(urc))
        qlist=list(cl)
        ulist=[x['rid'] for x in urc]
        for x in range(len(qlist)):
            if qlist[x].get('rid') in ulist:
                qlist[x]['isuser']=1
            else:
                qlist[x]['isuser'] = 0
        # u=set(qlist)
        # diffcomm=u-s
        # serializer=communitylist_rest(data=qlist,many=True)
        # serializer.is_valid()
        # return HttpResponse(JSONRenderer().render(serializer.data))
        return HttpResponse(JSONRenderer().render(qlist))

    def post(self,request,format=None):
        data=JSONParser.parse(request.POST)
        serializer=communitylist_rest(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.error_messages,status=400)



class get_communitylist(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self,request,*args,**kwargs):
        cl=User_registered_comunities.objects.filter(uid__username=kwargs.get('username')).values('rid__rfield')
        serializer=user_registered_rest(data=cl)
        return Response(serializer.initial_data)

    def post(self,request,format=None):
        data=JSONParser.parse(request.POST)
        serializer=communitylist_rest(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.error_messages,status=400)

class Userposts(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self,request,*args,**kwargs):
        # try:
            #p=Community_list.objects.values()
            #user registerd posts
            #p=Post.objects.filter(uid__username=request._user).values('pid', 'uid__username', 'pcid__rid__rfield','pdata','ptime')
        RC = User_registered_comunities.objects.filter(uid=User.objects.get(username=request._user)).values('rid__rfield')
        #RC=set(RC)
        L=[]
        for x in RC:
            for y in Post.objects.filter(community__rfield=x.get('rid__rfield')).values('uid__username','community__rfield','ptime','pdata','pid'):
                L.append(y)
            # for y in Post.objects.filter(pcid__rid__rfield=x.get('rid__rfield')).values('uid__username','pcid__rid__rfield','ptime','pdata','pid'):
            #     L.append(y)
            # l=[y for y in Post.objects.filter(pcid__rid__rfield=x.get('rid__rfield')).values() for x in RC]
        #
        #     #u=User.objects.get(username=kwargs.get('username'))
        #     pass
        #     #urc = User_registered_comunities.objects.filter(uid__username=kwargs.get('username')).#.values('rid__rname', 'uid__username', 'post__pdata','post__ptime')#values('rid','uid','post')
        # except Exception as e:
        #     return HttpResponse(status=404)
        # serializer = post_rest(data=L)
        # return Response(serializer.initial_data,status=200)
        return Response(L,status=201)

class Create_post(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self,request,*args,**kwargs):
        data=JSONParser().parse(request)
        data['uid']= User.objects.get(username=data['username']).id
        cl=Community_list.objects.get(rfield=data['optionvalue'])
        u=User.objects.get(username=data['username'])
        urc=User_registered_comunities.objects.filter(rid=cl,uid=u)[0]
        p=Post.objects.create(uid=u,pdata=data['postdata'],pcid=urc,ptime=timezone.now(),community=cl)
        p.save()
        return HttpResponse({'status':'post submited'},status=200)
    def delete(self,request):
        P=Post.objects.get(pid=request.data['pid'])
        P.delete()
        return Response(status=201)
        #     data['pcid']=User_registered_comunities.objects.get(uid=data['uid'],rid=Community_list.objects.get(rfield=data['optionvalue']).id).id
        #     del data['optionvalue']
        #     data['ptime']=timezone.now()
        #     data['pdata']=data['postdata']
        #     del data['postdata']
        #     serializer=Create_post_rest(data=data)
        #     if serializer.is_valid():
        #         serializer.create(serializer.data)
        #         return JsonResponse({'success':'page rendered'},status=200)
        #     else:
        #         return JsonResponse(serializer.error_messages,status=400)
        # except Exception as e:
        #     return HttpResponse(status=404)


class Create_community(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self,request,*args,**kwargs):
        cl=Community_list.objects.create(rname=request.data['username'],rfield=request.data['postdata'])
        cl.save()
        return HttpResponse({'status':'post submited'},status=200)