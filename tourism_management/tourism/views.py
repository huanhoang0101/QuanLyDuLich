from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions, generics, parsers, status
from rest_framework.decorators import action
from rest_framework.views import Response

from .paginators import Paginator
from .perms import CommentOwner
from .models import (
    Tour, TourImage, Post, User, TourComment, PostComment, Rating, PostLike
)
from .serializers import (
    TourSerializer, TourImageSerializer, UserSerializer, TourDetailSerializer,
    PostSerializer, TourCommentSerializer, PostCommentSerializer
)


# API Tour
class TourViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = Tour.objects.filter(active=True)
    serializer_class = TourSerializer
    pagination_class = Paginator

    def filter_queryset(self, queryset):
        kw = self.request.query_params.get('kw')
        if self.action.__eq__('list') and kw:
            queryset = queryset.filter(name__icontains=kw)

        return queryset


class TourDetailViewSet(viewsets.ViewSet, generics.RetrieveAPIView):
    queryset = Tour.objects.filter(active=True)
    serializer_class = TourDetailSerializer

    @action(methods=['get'], detail=True, url_path='image')
    def image(self, request, pk):
        t = self.get_object()
        image = t.image.filter(active=True)

        return Response(TourImageSerializer(image, many=True).data)

    @action(methods=['post'], detail=True, url_path='comments')
    def comments(self, request, pk):
        tour = self.get_object()
        c = TourComment(content=request.data['content'], tour=tour, user=request.user)
        c.save()

        return Response(TourCommentSerializer(c).data, status=status.HTTP_201_CREATED)

    @action(methods=['post'], detail=True, url_path='rating')
    def rating(self, request, pk):
        tour = self.get_object()
        r, _ = Rating.objects.get_or_create(tour=tour, user=request.user)
        r.value = request.data['rate']
        r.save()

        return Response(status=status.HTTP_200_OK)


class TourImageViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = TourImage.objects.filter(active=True)
    serializer_class = TourImageSerializer


# API Post
class PostViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = Post.objects.filter(active=True)
    serializer_class = PostSerializer
    pagination_class = Paginator

    def filter_queryset(self, queryset):
        kw = self.request.query_params.get('kw')
        if self.action.__eq__('list') and kw:
            queryset = queryset.filter(title__icontains=kw)

        return queryset


class PostDetailViewSet(viewsets.ViewSet, generics.RetrieveAPIView, generics.UpdateAPIView,
                        generics.DestroyAPIView, generics.CreateAPIView):
    queryset = Post.objects.filter(active=True)
    serializer_class = PostSerializer

    def create(self, request, *args, **kwargs):
        p = Post(title=request.data['title'], content=request.data['content'], user=request.user)
        p.save()

        return Response(PostSerializer(p).data, status=status.HTTP_201_CREATED)

    @action(methods=['post'], detail=True, url_path='comments')
    def comments(self, request, pk):
        post = self.get_object()
        c = PostComment(content=request.data['content'], post=post, user=request.user)
        c.save()

        return Response(PostCommentSerializer(c).data, status=status.HTTP_201_CREATED)

    @action(methods=['post'], detail=True, url_path='like')
    def like(self, request, pk):
        post = self.get_object()
        l, created = PostLike.objects.get_or_create(post=post, user=request.user)
        if not created:
            l.liked = not l.liked
        l.save()

        return Response(status=status.HTTP_200_OK)


# API User
class UserViewSet(viewsets.ViewSet, generics.CreateAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer
    parser_classes = [parsers.MultiPartParser, ]

    def get_permissions(self):
        if self.action in ['current-user']:
            return [permissions.IsAuthenticated()]

        return [permissions.AllowAny()]

    @action(methods=['get', 'put'], detail=False, url_path='current-user')
    def current_user(self, request):
        u = request.user
        if request.method.__eq__('PUT'):
            for k, v in request.data.item():
                if k.__eq__('password'):
                    u.set_password(k)
                else:
                    setattr(u, k, v)
            u.save()

        return Response(UserSerializer(u, context={'request': request}).data)


#API Comments
class TourCommentViewSet(viewsets.ViewSet, generics.DestroyAPIView, generics.UpdateAPIView):
    queryset = TourComment.objects.filter(active=True)
    serializer_class = TourCommentSerializer

    def get_permissions(self):
        if self.action in ['destroy', 'update', 'partial_update']:
            return [CommentOwner()]

        return [permissions.AllowAny()]

class PostCommentViewSet(viewsets.ViewSet, generics.DestroyAPIView, generics.UpdateAPIView):
    queryset = PostComment.objects.filter(active=True)
    serializer_class = PostCommentSerializer

    def get_permissions(self):
        if self.action in ['destroy', 'update', 'partial_update']:
            return [CommentOwner()]

        return [permissions.AllowAny()]
