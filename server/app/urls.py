from django.urls import path
from .views import create_job_listing, get_job_listings, fetch_job_listings, fetch_job, update_job_listing, delete_job_listing, apply_for_job, track_applications, update_job_application, withdraw_job_application, schedule_interview

urlpatterns = [
    path('jobs', create_job_listing, name='create_job'),
    path('employers/<int:employer_id>/jobs', get_job_listings, name='get_jobs'),
    path('api/jobs', fetch_job_listings, name='fetch_jobs'),
    path('api/jobs/<int:job_id>', fetch_job, name='fetch_job'),
    path('jobs/<int:job_id>', update_job_listing, name='update_job'),
    path('jobs/<int:job_id>/delete', delete_job_listing, name='delete_job'),
    path('api/jobs/<int:job_id>/apply', apply_for_job, name='apply_for_job'),
    path('api/job-seekers/<int:seeker_id>/applications', track_applications, name='track_applications'),
    path('api/applications/<int:application_id>', update_job_application, name='update_application'),
    path('api/applications/<int:application_id>/withdraw', withdraw_job_application, name='withdraw_application'),
    path('api/applications/<int:application_id>/schedule-interview', schedule_interview, name='schedule_interview'),
]