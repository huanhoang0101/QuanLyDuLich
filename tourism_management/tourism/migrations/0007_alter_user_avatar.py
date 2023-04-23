# Generated by Django 4.1.7 on 2023-04-18 11:04

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tourism', '0006_user_gender_user_id_card'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=cloudinary.models.CloudinaryField(default='https://res.cloudinary.com/dnrpggpn0/image/upload/v1681630820/agk5titgearqrmlzgjgx.png', max_length=255, verbose_name='image'),
        ),
    ]
