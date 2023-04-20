from .models import Tour, User, TourImage, Location, UserTour, Post, TourComment, Rating, PostComment
from rest_framework import serializers


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'name']

class TourSerializer(serializers.ModelSerializer):
    location = LocationSerializer()

    class Meta:
        model = Tour
        fields = ['id', 'name', 'location', 'children_price', 'adult_price', 'duration', 'max_person']


class TourDetailSerializer(TourSerializer):
    class Meta:
        model = TourSerializer.Meta.model
        fields = TourSerializer.Meta.fields + ['description', 'number_rate']


class TourImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TourImage
        fields = ['id', 'value']


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'number_like', 'created_date', 'user_id']


class UserSerializer(serializers.ModelSerializer):
    def get_image(self, obj):
        if obj.avatar:
            requests = self.context.get('request')
            return requests.build_absolute_uri(obj.avatar) if requests else ''

    def create(self, validated_data):
        data = validated_data.copy()

        u = User(**data)
        u.set_password(u.password)
        u.save()

        return u

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'password', 'email', 'id_card', 'gender']
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
    class Meta:
        model = UserTour
        fields = ['number_adult', 'number_children', 'date_start', 'date_finish', 'total_price', 'status']