from rest_framework import pagination


class TourPaginator(pagination.PageNumberPagination):
    page_size = 8


class PostPaginator(pagination.PageNumberPagination):
    page_size = 4


class CommentPaginator(pagination.PageNumberPagination):
    page_size = 5