# Generated by Django 4.1.7 on 2023-04-05 16:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tourism', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tourimage',
            name='tour',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='image', to='tourism.tour'),
        ),
    ]