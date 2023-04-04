from .models import Tour, User, TourImage, Location, UserTour, Post, TourComment, Rating
from rest_framework import serializers


class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = ['id', 'name', 'location', 'children_price', 'adult_price', 'duration', 'max_person']


class TourDetailSerializer(TourSerializer):
    class Meta:
        model = TourSerializer.Meta.model
        fields = TourSerializer.Meta.fields + ['description', 'number_rate']


class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        data = validated_data.copy()

        u = User(**data)
        u.set_password(u.password)
        u.save()

        return u

    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'password', 'avatar']
        extra_kwargs = {
            'password': {'write_only': True}
        }


class TourImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TourImage
        fields = ['id', 'value']
