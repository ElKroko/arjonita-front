from django.urls import include, path
from rest_framework import routers
from aplicativo import views
from aplicativo.views import Auth,Proyects,Proposal,Clients,Postulations

# from django.urls import include, path
# from rest_framework import routers
# from restApi import views

router = routers.DefaultRouter()
router.register(r'api/v1/users', views.UserViewSet)  # set endpoint via router
# router.register(r'api/v1/proyectos', views.Proyects)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    # path('api/v1/proyectos/', Proyects.as_view()),  # set endpoint
    path('api/v1/proyectos/<str:action>/', Proyects.as_view()),  # set endpoint
    path('api/v1/proyectos/<str:action>/<int:value>/', Proyects.as_view()),  # set endpoint
    # path('api/v1/proyectos/<str:action>/<int:value>/', Proyects.as_view()),  # set endpoint
    path('api/v1/propuestas/<str:action>/', Proposal.as_view()),  # set endpoint
    path('api/v1/clientes/<str:action>/', Clients.as_view()),  # set endpoint
    path('api/v1/postulaciones/<str:action>/', Postulations.as_view()),  # set endpoint
    path('api/v1/auth/', Auth.as_view()),  # set endpoint
    # path('api/v1/auth/', include('rest_framework.urls', namespace='rest_framework'))
]
