from django.contrib import admin
from .models import Tour, Location, TourImage, Post, User, UserTour
from django.utils.html import mark_safe
from django import forms
from ckeditor_uploader.widgets import CKEditorUploadingWidget
class TourismManagementAdminSite(admin.AdminSite):
    site_header = 'TOURISM MANAGEMENT'


admin_site = TourismManagementAdminSite('TourismManagementAdminSite')

class TourForm(forms.ModelForm):
    description = forms.CharField(widget=CKEditorUploadingWidget)

    class Meta:
        model = Tour
        fields = '__all__'
        exclude = ['number_rate']


class TourImageForm(forms.ModelForm):

    class Meta:
        model = TourImage
        fields = '__all__'


class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = '__all__'
        exclude = ['avatar', 'is_staff', 'last_login', 'date_joined']


class TourImageInlineAdmin(admin.StackedInline):
    model = TourImage
    pk_name = 'tour'
    readonly_fields = ['image']

    def image(self, tour_image):
        return mark_safe("<img src='https://res.cloudinary.com/dnrpggpn0/{}' width='120' />"
                         .format(tour_image.value))


class TourAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'duration', 'max_person', 'children_price', 'adult_price', 'number_rate', 'location']
    search_fields = ['name', 'duration', 'children_price', 'adult_price', 'number_rate', 'location__name']
    list_filter = ['duration', 'number_rate', 'location', 'max_person']
    form = TourForm
    inlines = (TourImageInlineAdmin, )


class TourImageAdmin(admin.ModelAdmin):
    form = TourImageForm
    list_display = ['id', 'tour']
    list_filter = ['tour__name']
    readonly_fields = ['image']

    def image(self, tour_image):
        return mark_safe("<img src='https://res.cloudinary.com/dnrpggpn0/{}' width='120' />".format(tour_image.value))


class UserAdmin(admin.ModelAdmin):
    form = UserForm
    list_display = ['id', 'username', 'email', 'role']
    search_fields = ['email', 'username', 'role']
    list_filter = ['role', 'gender']

class PostForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget)

    class Meta:
        model = Post
        fields = '__all__'
        exclude = ['number_like']

class PostAdmin(admin.ModelAdmin):
    form = PostForm
    list_display = ['id', 'title', 'number_like', 'user']
    list_filter = ['number_like', 'user']
    search_fields = ['title', 'user__username']

class UserTourForm(forms.ModelForm):
    class Meta:
        model = UserTour
        fields = '__all__'
        exclude = ['status']

class UserTourAdmin(admin.ModelAdmin):
    form = UserTourForm
    list_display = ['tour', 'user', 'total_price', 'status']
    list_filter = ['tour', 'status']
    search_fields = ['tour', 'user__username']


# Register your models here.
# admin.site.register(Tour, TourAdmin)
# admin.site.register(Location)
# admin.site.register(TourImage, TourImageAdmin)
# admin.site.register(Post, PostAdmin)
# admin.site.register(User, UserAdmin)
# admin.site.register(UserTour, UserTourAdmin)

admin_site.register(Tour, TourAdmin)
admin_site.register(Location)
admin_site.register(TourImage, TourImageAdmin)
admin_site.register(Post, PostAdmin)
admin_site.register(User, UserAdmin)
admin_site.register(UserTour, UserTourAdmin)