from django.urls import path
from .views import create_job_listing, get_job_listings

urlpatterns = [
    path('jobs', create_job_listing, name='create_job'),
    path('employers/<int:employer_id>/jobs', get_job_listings, name='get_jobs'),
]
