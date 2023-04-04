from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions, generics, parsers, status
from .paginators import Paginator
from .models import Tour
from .serializers import TourSerializer, TourImageSerializer, UserSerializer, TourDetailSerializer


class TourViewSet(viewsets.ViewSet, generics.ListAPIView,
                  generics.RetrieveAPIView):
    queryset = Tour.objects.filter(active=True)
    serializer_class = TourDetailSerializer
    pagination_class = Paginator

    def filter_queryset(self, queryset):
        kw = self.request.query_params.get('kw')
        if self.action.__eq__('list') and kw:
            queryset = queryset.filter(name__icontains=kw)

        return queryset


def index(request):
    return HttpResponse("tourism-management app")
