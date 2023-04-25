from django.db import models
from django.contrib.auth.models import AbstractUser
from ckeditor.fields import RichTextField
from cloudinary.models import CloudinaryField


class BaseModel(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        abstract = True


GENDER_CHOICES = (
    (0, 'female'),
    (1, 'male'),
    (2, 'not specified'),
)


class User(AbstractUser):
    avatar = CloudinaryField('image', default=
    'https://res.cloudinary.com/dnrpggpn0/image/upload/v1681630820/agk5titgearqrmlzgjgx.png')
    id_card = models.CharField(max_length=15)
    gender = models.IntegerField(choices=GENDER_CHOICES)


class Location(BaseModel):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Tour(BaseModel):
    name = models.CharField(max_length=255)
    duration = models.IntegerField()
    children_price = models.DecimalField(max_digits=10, decimal_places=2)
    adult_price = models.DecimalField(max_digits=10, decimal_places=2)
    description = RichTextField()
    number_rate = models.FloatField(default=0)
    max_person = models.IntegerField()
    background = CloudinaryField('image')
    location = models.ForeignKey(Location, on_delete=models.CASCADE)

    #    user = models.ManyToManyField(User, through='UserTour')
    def __str__(self):
        return self.name


class UserTour(BaseModel):
    number_adult = models.IntegerField()
    number_children = models.IntegerField()
    date_start = models.DateTimeField()
    date_finish = models.DateTimeField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.IntegerField(default=0)
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    payment_method = models.CharField(max_length=10)


class TourImage(BaseModel):
    value = CloudinaryField('image')
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='image')


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
    number_like = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class PostComment(BaseModel):
    content = models.CharField(max_length=255)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.content


class PostLike(BaseModel):
    liked = models.BooleanField(default=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='like')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('post', 'user')
