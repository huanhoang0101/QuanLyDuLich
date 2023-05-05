from abc import ABCMeta

from .models import (
    Tour, User, TourImage, Location, UserTour, Post, TourComment,
    Rating, PostComment, PostLike
)
from rest_framework import serializers


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'name']


class TourSerializer(serializers.ModelSerializer):
    location = LocationSerializer()
    image = serializers.SerializerMethodField(source='background')

    def get_image(self, obj):
        if obj.background:
            request = self.context.get('request')
            return request.build_absolute_uri(
                'https://res.cloudinary.com/dnrpggpn0/%s' % obj.background) if request else ''

    class Meta:
        model = Tour
        fields = ['id', 'name', 'location', 'children_price',
                  'adult_price', 'duration', 'max_person', 'image', 'number_rate']


class TourDetailSerializer(TourSerializer):
    class Meta:
        model = TourSerializer.Meta.model
        fields = TourSerializer.Meta.fields + ['description', 'number_rate']


class TourImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField(source='value')

    def get_image(self, obj):
        if obj.value:
            request = self.context.get('request')
            return request.build_absolute_uri(
                'https://res.cloudinary.com/dnrpggpn0/%s' % obj.value) if request else ''

    class Meta:
        model = TourImage
        fields = ['id', 'image']


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'number_like', 'created_date', 'user_id']


class UserSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField(source='avatar')

    def get_image(self, obj):
        if obj.avatar:
            request = self.context.get('request')
            return request.build_absolute_uri(
                'https://res.cloudinary.com/dnrpggpn0/%s' % obj.avatar) if request else ''

    def create(self, validated_data):
        data = validated_data.copy()

        u = User(**data)
        u.set_password(u.password)
        u.save()

        return u

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username',
                  'password', 'email', 'id_card', 'gender', 'image', 'role']
        extra_kwargs = {
            'password': {'write_only': True}
        }


class TourCommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = TourComment
        fields = ['id', 'content', 'created_date', 'user']


class PostCommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = PostComment
        fields = ['id', 'content', 'created_date', 'user']


class UserTourSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = UserTour
        fields = ['number_adult', 'number_children', 'date_start', 'date_finish', 'total_price', 'status', 'user',
                  'payment_method']


class LikedSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostLike
        fields = ['liked']


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ['value']


class TotalLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['number_like']


class TourRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = ['number_rate']


"""
class AuthorizedPostSerializer(PostSerializer):
    liked = serializers.SerializerMethodField()

    def get_liked(self, post):
        request = self.context.get('request')
        if request:
            return post.like.filter(user=request.user, liked=True).exists()

    class Meta:
        model = PostSerializer.Meta.model
        fields = PostSerializer.Meta.fields + ['liked']
"""
