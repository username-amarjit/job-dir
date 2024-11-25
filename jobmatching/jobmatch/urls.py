from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet, UserProfileViewSet

router = DefaultRouter()
router.register(r'jobs', JobViewSet)
router.register(r'profiles', UserProfileViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/profiles/<int:pk>/recommend_jobs/', UserProfileViewSet.as_view({'get': 'recommend_jobs'})),
]
