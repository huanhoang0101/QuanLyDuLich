from django.contrib import admin
from django.urls import path, re_path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('tour', views.TourViewSet)
router.register('tour', views.TourDetailViewSet)
router.register('post', views.PostViewSet)
router.register('user', views.UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
]