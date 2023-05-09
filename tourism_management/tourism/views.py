from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions, generics, parsers, status
from rest_framework.decorators import action
from rest_framework.views import Response

from .paginators import TourPaginator, PostPaginator, CommentPaginator, TourOrderPaginator
from .perms import CommentOwner, Staff
from .models import (
    Tour, TourImage, Post, User, TourComment, PostComment, Rating, PostLike, UserTour
)
from .serializers import (
    TourSerializer, TourImageSerializer, UserSerializer, TourDetailSerializer,
    PostSerializer, TourCommentSerializer, PostCommentSerializer, UserTourSerializer,
    LikedSerializer, RatingSerializer, TotalLikeSerializer, TourRatingSerializer
)
from django.db.models import Avg
from django.contrib.auth import update_session_auth_hash

def filter_by_max_person(max_person, queryset):
    switcher = {
        '1': queryset.filter(max_person__range=(1, 4)),
        '2': queryset.filter(max_person__range=(5, 9)),
        '3': queryset.filter(max_person__range=(10, 15)),
        '4': queryset.filter(max_person__range=(15, 25))
    }
    return switcher.get(max_person)

def filter_by_duration(duration, queryset):
    switcher = {
        '1': queryset.filter(duration__range=(2, 4)),
        '2': queryset.filter(duration__range=(5, 8)),
        '3': queryset.filter(duration__range=(9, 14)),
        '4': queryset.filter(duration__range=(15, 30))
    }
    return switcher.get(duration)

def filter_by_price(price, queryset):
    switcher = {
        '1': queryset.filter(adult_price__lt=5000000),
        '2': queryset.filter(adult_price__range=(5000000, 8000000)),
        '3': queryset.filter(adult_price__gt=8000000)
    }
    return switcher.get(price)

# API Tour
class TourViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = Tour.objects.filter(active=True)
    serializer_class = TourSerializer
    pagination_class = TourPaginator

    def filter_queryset(self, queryset):
        kw = self.request.query_params.get('kw')
        price = self.request.query_params.get('price')
        duration = self.request.query_params.get('duration')
        max_person = self.request.query_params.get('max_person')
        if self.action.__eq__('list') and kw:
            queryset = queryset.filter(name__icontains=kw)
        elif self.action.__eq__('list') and price:
            queryset = filter_by_price(price, queryset)
        elif self.action.__eq__('list') and duration:
            queryset = filter_by_duration(duration, queryset)
        elif self.action.__eq__('list') and max_person:
            queryset = filter_by_max_person(max_person, queryset)

        return queryset.order_by('-created_date')

    @action(methods=['get'], detail=False, url_path='new')
    def get_new(self, request):
        tour = Tour.objects.filter(active=True).order_by('-created_date')[:8]

        return Response(TourSerializer(tour, many=True).data)

class TourDetailViewSet(viewsets.ViewSet, generics.RetrieveAPIView):
    queryset = Tour.objects.filter(active=True)
    serializer_class = TourDetailSerializer

    def get_permissions(self):
        if self.action in ['rating', 'get-rating', 'order']:
            return [permissions.IsAuthenticated()]
        if (self.action in ['comments']) and (self.request.method == 'POST'):
            return [permissions.IsAuthenticated()]

        return [permissions.AllowAny()]

    @action(methods=['post'], detail=True, url_path='order')
    def order(self, request, pk):
        t = self.get_object()
        user = request.user
        number_adult = request.data['number_adult']
        number_children = request.data['number_children']
        date_start = request.data['date_start']
        date_finish = request.data['date_finish']
        total_price = request.data['total_price']
        payment_method = request.data['payment_method']
        status_tour = 1
        user_tour = UserTour(tour=t, user=user, number_adult=number_adult,
                             number_children=number_children, date_start=date_start,
                             date_finish=date_finish, total_price=total_price,
                             status=status_tour, payment_method=payment_method)
        user_tour.save()

        return Response(UserTourSerializer(user_tour, context={'request': request}).data, status=status.HTTP_201_CREATED)

    @action(methods=['get'], detail=True, url_path='image')
    def image(self, request, pk):
        tour = self.get_object()
        image = tour.image.filter(active=True)

        return Response(TourImageSerializer(image, many=True, context={'request': request}).data)

    @action(methods=['post', 'get'], detail=True, url_path='comments')
    def comments(self, request, pk):
        tour = self.get_object()
        if request.method.__eq__('POST'):
            c = TourComment(content=request.data['content'], tour=tour, user=request.user)
            c.save()

            return Response(TourCommentSerializer(c, context={'request': request}).data, status=status.HTTP_201_CREATED)
        else:
            c = TourComment.objects.filter(tour=tour).order_by('-created_date')

            return Response(TourCommentSerializer(c, many=True, context={'request': request}).data, status=status.HTTP_200_OK)

    @action(methods=['post'], detail=True, url_path='rating')
    def rating(self, request, pk):
        tour = self.get_object()
        r, _ = Rating.objects.get_or_create(tour=tour, user=request.user)
        r.value = request.data['rate']
        r.save()

        return Response(status=status.HTTP_200_OK)

    @action(methods=['get'], detail=True, url_path='get-rating')
    def get_rating(self, request, pk):
        user = request.user
        tour = self.get_object()
        rating = Rating.objects.filter(tour=tour, user=user)
        if rating is None:
            rating = 0

        return Response(RatingSerializer(rating, many=True).data, status=status.HTTP_200_OK)

    @action(methods=['get'], detail=True, url_path='average-rating')
    def average_rating(self, request, pk):
        tour = self.get_object()
        avg = Rating.objects.filter(tour=tour).aggregate(average=Avg('value'))
        result = float(avg["average"])
        setattr(tour, 'number_rate', result)
        tour.save()

        return Response(TourRatingSerializer(tour).data)


class TourImageViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = TourImage.objects.filter(active=True)
    serializer_class = TourImageSerializer


# API Post
class PostViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = Post.objects.filter(active=True).order_by('-created_date')
    serializer_class = PostSerializer
    pagination_class = PostPaginator

    def filter_queryset(self, queryset):
        kw = self.request.query_params.get('kw')
        if self.action.__eq__('list') and kw:
            queryset = queryset.filter(title__icontains=kw)

        return queryset

    @action(methods=['get'], detail=False, url_path='new')
    def get_new(self, request):
        post = Post.objects.filter(active=True).order_by('-created_date')[:8]

        return Response(PostSerializer(post, many=True).data)

class PostDetailViewSet(viewsets.ViewSet, generics.RetrieveAPIView, generics.UpdateAPIView,
                        generics.DestroyAPIView, generics.CreateAPIView):
    queryset = Post.objects.filter(active=True)
    serializer_class = PostSerializer
    pagination_class = CommentPaginator

    def get_permissions(self):
        if self.action in ['like', 'liked', 'change-password']:
            return [permissions.IsAuthenticated()]
        if (self.action in ['comments']) and (self.request.method == 'POST'):
            return [permissions.IsAuthenticated()]

        return [permissions.AllowAny()]

    def create(self, request, *args, **kwargs):
        p = Post(title=request.data['title'], content=request.data['content'], user=request.user)
        p.save()

        return Response(PostSerializer(p).data, status=status.HTTP_201_CREATED)

    @action(methods=['post', 'get'], detail=True, url_path='comments')
    def comments(self, request, pk):
        post = self.get_object()
        if request.method.__eq__('POST'):
            c = PostComment(content=request.data['content'], post=post, user=request.user)
            c.save()

            return Response(PostCommentSerializer(c, context={'request': request}).data, status=status.HTTP_201_CREATED)
        else:
            c = PostComment.objects.filter(post=post).order_by('-created_date')
            return Response(PostCommentSerializer(c, many=True, context={'request': request}).data, status=status.HTTP_200_OK)

    @action(methods=['post'], detail=True, url_path='like')
    def like(self, request, pk):
        post = self.get_object()
        l, created = PostLike.objects.get_or_create(post=post, user=request.user)
        if not created:
            l.liked = not l.liked
        l.save()

        return Response(status=status.HTTP_200_OK)

    @action(methods=['get'], detail=True, url_path='liked')
    def liked(self, request, pk):
        user = request.user
        post = self.get_object()
        liked = PostLike.objects.filter(post=post, user=user)
        if liked is None:
            liked = False

        return Response(LikedSerializer(liked, many=True).data)

    @action(methods=['get'], detail=True, url_path='total-like')
    def total_like(self, request, pk):
        post = self.get_object()
        total_like = PostLike.objects.filter(post=post, liked=True).count()
        setattr(post, 'number_like', total_like)
        post.save()

        return Response(TotalLikeSerializer(post).data)

# API User
class UserViewSet(viewsets.ViewSet, generics.CreateAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer
    parser_classes = [parsers.MultiPartParser, ]

    def get_permissions(self):
        if self.action in ['current-user', 'tours']:
            return [permissions.IsAuthenticated()]

        return [permissions.AllowAny()]

    @action(methods=['get', 'put'], detail=False, url_path='current-user')
    def current_user(self, request):
        u = request.user
        if request.method.__eq__('PUT'):
            for k, v in request.data.items():
                setattr(u, k, v)
            u.save()

        return Response(UserSerializer(u, context={'request': request}).data)

    @action(methods=['put'], detail=False, url_path='change-password')
    def change_password(self, request):
        user = request.user
        old = request.data['old-password']
        new = request.data['new-password']
        confirm = request.data['confirm-password']
        if user.check_password(old):
            if new == confirm:
                update_session_auth_hash(request, request.user)
                user.set_password(new)
                user.save()

                return Response(UserSerializer(user, context={'request': request}).data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['get'], detail=True, url_path='tours')
    def view_history(self, request, pk):
        user = self.get_object()
        history = UserTour.objects.filter(user=user).order_by('-created_date')

        return Response(UserTourSerializer(history, many=True, context={'request': request}).data, status=status.HTTP_200_OK)


#API Comments
class TourCommentViewSet(viewsets.ViewSet, generics.DestroyAPIView,
                         generics.UpdateAPIView, generics.ListAPIView):
    queryset = TourComment.objects.filter(active=True)
    serializer_class = TourCommentSerializer
    pagination_class = CommentPaginator

    def get_permissions(self):
        if self.action in ['destroy', 'update', 'partial_update']:
            return [CommentOwner()]

        return [permissions.AllowAny()]

    def filter_queryset(self, queryset):
        tour_id = self.request.query_params.get('id')
        if self.action.__eq__('list') and tour_id:
            queryset = queryset.filter(tour=tour_id).order_by('-created_date')

        return queryset

class PostCommentViewSet(viewsets.ViewSet, generics.DestroyAPIView,
                         generics.UpdateAPIView, generics.ListAPIView):
    queryset = PostComment.objects.filter(active=True)
    serializer_class = PostCommentSerializer
    pagination_class = CommentPaginator

    def get_permissions(self):
        if self.action in ['destroy', 'update', 'partial_update']:
            return [CommentOwner()]

        return [permissions.AllowAny()]

    def filter_queryset(self, queryset):
        post_id = self.request.query_params.get('id')
        if self.action.__eq__('list') and post_id:
            queryset = queryset.filter(post=post_id).order_by('-created_date')

        return queryset

#API Tour Order
class TourOrderViewSet(viewsets.ViewSet, generics.ListAPIView, generics.RetrieveAPIView):
    queryset = UserTour.objects.filter(active=True)
    serializer_class = UserTourSerializer
    pagination_class = TourOrderPaginator

    @action(methods=['put'], detail=True, url_path='status')
    def chang_status(self, request, pk):
        tour_order = self.get_object()
        stt = tour_order.status
        if stt != 4:
            stt += 1
            setattr(tour_order, 'status', stt)
            tour_order.save()

        return Response(status=status.HTTP_200_OK)

    def filter_queryset(self, queryset):
        stt = self.request.query_params.get('status')
        if self.action.__eq__('list') and stt:
            queryset = queryset.filter(status=stt)

        return queryset.order_by('-created_date')

