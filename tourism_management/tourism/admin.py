from django.contrib import admin
from .models import Tour, Location, TourImage, Post, User
from django.utils.html import mark_safe
from django import forms
from ckeditor_uploader.widgets import CKEditorUploadingWidget


class TourForm(forms.ModelForm):
    description = forms.CharField(widget=CKEditorUploadingWidget)

    class Meta:
        model = Tour
        fields = '__all__'


class TourImageForm(forms.ModelForm):
    class Meta:
        model = TourImage
        fields = '__all__'


class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = '__all__'


class TourAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'duration', 'children_price', 'adult_price', 'number_rate', 'location']
    search_fields = ['name', 'duration', 'children_price', 'adult_price', 'number_rate', 'location__name']
    list_filter = ['duration', 'number_rate', 'location']
    form = TourForm


class TourImageAdmin(admin.ModelAdmin):
    form = TourImageForm
    list_display = ['id', 'tour']
    list_filter = ['tour__name']
    readonly_fields = ['image']

    def image(self, tour_image):
        return mark_safe("<img src='/static/{}' width='120' />".format(tour_image.value))


class UserAdmin(admin.ModelAdmin):
    form = UserForm
    list_display = ['id', 'username']


# Register your models here.
admin.site.register(Tour, TourAdmin)
admin.site.register(Location)
admin.site.register(TourImage, TourImageAdmin)
admin.site.register(Post)
admin.site.register(User, UserAdmin)