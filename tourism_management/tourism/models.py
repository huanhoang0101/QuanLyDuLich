from django.db import models
from django.contrib.auth.models import AbstractUser
from ckeditor.fields import RichTextField


class BaseModel(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        abstract = True


# class Role(BaseModel):
#    name = models.CharField(max_length=50)


class User(AbstractUser):
    avatar = models.ImageField(upload_to='users/%Y/%m', null=True)


class Location(BaseModel):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Tour(BaseModel):
    name = models.CharField(max_length=255)
    duration = models.IntegerField()
    children_price = models.DecimalField
    adult_price = models.DecimalField
    description = RichTextField()
    number_rate = models.FloatField
    max_person = models.IntegerField
    location = models.ForeignKey(Location, on_delete=models.CASCADE)

#    user = models.ManyToManyField(User, through='UserTour')
    def __str__(self):
        return self.name


class UserTour(BaseModel):
    number_adult = models.IntegerField()
    number_children = models.IntegerField()
    date_start = models.DateTimeField()
    date_finish = models.DateTimeField()
    total_price = models.DecimalField
    status = models.IntegerField()
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class TourImage(BaseModel):
    value = models.ImageField(upload_to='users/%Y/%m', null=True)
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE)


class TourComment(BaseModel):
    content = models.CharField(max_length=255)
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.content


class Rating(BaseModel):
    value = models.SmallIntegerField(default=0)
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('tour', 'user')


class Post(BaseModel):
    title = models.CharField(max_length=255)
    content = RichTextField()
    number_like = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class PostComment(BaseModel):
    content = models.CharField(max_length=255)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.content


class LikeComment(BaseModel):
    liked = models.BooleanField(default=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('post', 'user')
