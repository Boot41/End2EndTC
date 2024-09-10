from django.urls import path
from .views import create_job_listing, get_job_listings, update_job_listing, delete_job_listing

urlpatterns = [
    path('jobs', create_job_listing, name='create_job'),
    path('employers/<int:employer_id>/jobs', get_job_listings, name='get_jobs'),
    path('jobs/<int:job_id>', update_job_listing, name='update_job'),
    path('jobs/<int:job_id>/delete', delete_job_listing, name='delete_job'),
]
