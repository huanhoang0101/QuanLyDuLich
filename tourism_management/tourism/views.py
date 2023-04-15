from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions, generics, parsers, status
from rest_framework.decorators import action
from rest_framework.views import Response

from .paginators import Paginator
from .models import Tour, TourImage, Post, User
from .serializers import TourSerializer, TourImageSerializer, UserSerializer, TourDetailSerializer, PostSerializer

#API Tour
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



class TourImageViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = TourImage.objects.filter(active=True)
    serializer_class = TourImageSerializer


#API Post
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.filter(active=True)
    serializer_class = PostSerializer


#API User
class UserViewSet(viewsets.ViewSet, generics.CreateAPIView,
                  generics.ListAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer
    parser_classes = [parsers.MultiPartParser, ]

    @action(methods=['get'], detail=False, url_path='current-user')
    def current_user(self, request):
        return Response(UserSerializer(request.user).data)