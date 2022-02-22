# Generated by Django 4.0 on 2021-12-31 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProposalItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombrePropuesta', models.CharField(max_length=500)),
                ('tipo', models.CharField(max_length=200)),
                ('gestorComercial', models.CharField(max_length=500)),
                ('monto', models.FloatField()),
                ('estado', models.CharField(max_length=200)),
                ('mesPostulacion', models.CharField(max_length=200)),
                ('FechaVenta', models.DateField()),
                ('gerenteUniNegocio', models.CharField(max_length=200)),
                ('jefeProyecto', models.CharField(max_length=200)),
                ('codigo', models.CharField(max_length=200)),
                ('idCodigo', models.CharField(max_length=200)),
                ('notas', models.CharField(max_length=1000)),
                ('nombreCliente', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='ProyectItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=200)),
                ('product_price', models.FloatField()),
                ('product_quantity', models.PositiveIntegerField()),
            ],
        ),
    ]