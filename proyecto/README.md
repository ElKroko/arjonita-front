
### AUTH GOOGLE CONFIG

##### Configurar keys en el archivo setings.py
```
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '<your app id goes here>'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = '<your app secret goes here>'
```


##### Agregar una app en el sistema con la configuración de google

```
python manage.py  createapplication confidential password --user <ID-user-admin> --client-id <google-key> --client-secret <google-secret-key>
```