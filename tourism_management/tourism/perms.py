from rest_framework import permissions
from django.contrib.auth.models import User, Group, Permission


class CommentOwner(permissions.IsAuthenticated):
    def has_object_permission(self, request, view, comment):
        return request.user and request.user == comment.user

class Staff(permissions.IsAuthenticated):
    def has_permission(self, request, view):
        return request.user and request.user.role == 1
