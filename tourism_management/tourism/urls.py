from django.contrib import admin
from django.urls import path, re_path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('tours', views.TourViewSet)
router.register('tour', views.TourDetailViewSet)
router.register('posts', views.PostViewSet)
router.register('post', views.PostDetailViewSet)
router.register('user', views.UserViewSet)
router.register('tour-comments', views.TourCommentViewSet)
router.register('post-comments', views.PostCommentViewSet)


urlpatterns = [
    path('', include(router.urls)),
]