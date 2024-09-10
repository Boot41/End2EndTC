from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import JobListing

class JobListingTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.valid_data = {
            'employer_id': 1,
            'title': 'Software Engineer',
            'description': 'Develop and maintain software applications.',
            'company': 'Tech Corp',
            'location': 'Remote'
        }
        self.invalid_data = {
            'title': '',
        }

    def test_create_job_listing_success(self):
        response = self.client.post(reverse('create_job'), self.valid_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_job_listing_failure(self):
        response = self.client.post(reverse('create_job'), self.invalid_data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_get_job_listings(self):
        job = JobListing.objects.create(**self.valid_data)
        response = self.client.get(reverse('get_jobs', kwargs={'employer_id': 1}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn(job.title.encode(), response.content)
