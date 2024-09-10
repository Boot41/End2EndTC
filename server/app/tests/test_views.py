from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import JobListing, JobApplication

class JobApplicationTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.valid_job_data = {
            'employer_id': 1,
            'title': 'Software Engineer',
            'description': 'Develop and maintain software applications.',
            'company': 'Tech Corp',
            'location': 'Remote',
            'type': 'Full-Time'
        }
        self.job_listing = JobListing.objects.create(**self.valid_job_data)

    def test_apply_for_job_success(self):
        response = self.client.post(reverse('apply_for_job', kwargs={'job_id': self.job_listing.id}), {'seeker_id': 1})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['status'], 'Pending')

    def test_apply_for_job_no_seeker_id(self):
        response = self.client.post(reverse('apply_for_job', kwargs={'job_id': self.job_listing.id}), {})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_apply_for_job_not_found(self):
        response = self.client.post(reverse('apply_for_job', kwargs={'job_id': 999}), {'seeker_id': 1})
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_track_applications_success(self):
        self.client.post(reverse('apply_for_job', kwargs={'job_id': self.job_listing.id}), {'seeker_id': 1})
        response = self.client.get(reverse('track_applications', kwargs={'seeker_id': 1}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_track_applications_empty(self):
        response = self.client.get(reverse('track_applications', kwargs={'seeker_id': 1}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, [])

    def test_update_job_application_success(self):
        application = JobApplication.objects.create(job_listing=self.job_listing, seeker_id=1)
        response = self.client.put(reverse('update_application', kwargs={'application_id': application.id}), {'status': 'Accepted'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['status'], 'Accepted')

    def test_update_job_application_invalid_status(self):
        application = JobApplication.objects.create(job_listing=self.job_listing, seeker_id=1)
        response = self.client.put(reverse('update_application', kwargs={'application_id': application.id}), {'status': 'InvalidStatus'})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_update_job_application_not_found(self):
        response = self.client.put(reverse('update_application', kwargs={'application_id': 999}), {'status': 'Accepted'})
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_withdraw_job_application_success(self):
        application = JobApplication.objects.create(job_listing=self.job_listing, seeker_id=1)
        response = self.client.delete(reverse('withdraw_application', kwargs={'application_id': application.id}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_withdraw_job_application_not_found(self):
        response = self.client.delete(reverse('withdraw_application', kwargs={'application_id': 999}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
