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
            'location': 'Remote',
            'type': 'Full-Time'
        }
        self.invalid_data = {
            'title': '',
        }
        self.job_listing = JobListing.objects.create(**self.valid_data)

    def test_create_job_listing_success(self):
        response = self.client.post(reverse('create_job'), self.valid_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_job_listing_failure(self):
        response = self.client.post(reverse('create_job'), self.invalid_data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_get_job_listings(self):
        response = self.client.get(reverse('get_jobs', kwargs={'employer_id': 1}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn(self.job_listing.title.encode(), response.content)

    def test_fetch_job_listings_with_filters(self):
        response = self.client.get(reverse('fetch_jobs'), {'title': 'Software', 'location': 'Remote'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn(self.job_listing.title.encode(), response.content)

    def test_fetch_job_listings_empty(self):
        response = self.client.get(reverse('fetch_jobs'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, [])

    def test_fetch_job_success(self):
        response = self.client.get(reverse('fetch_job', kwargs={'job_id': self.job_listing.id}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], self.job_listing.title)

    def test_fetch_job_not_found(self):
        response = self.client.get(reverse('fetch_job', kwargs={'job_id': 999}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_update_job_listing_success(self):
        update_data = {
            'title': 'Senior Software Engineer',
            'description': 'Develop and lead software projects.',
            'company': 'Tech Corp',
            'location': 'Remote',
            'type': 'Full-Time'
        }
        response = self.client.put(reverse('update_job', kwargs={'job_id': self.job_listing.id}), update_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.job_listing.refresh_from_db()
        self.assertEqual(self.job_listing.title, 'Senior Software Engineer')

    def test_update_job_listing_not_found(self):
        response = self.client.put(reverse('update_job', kwargs={'job_id': 999}), self.valid_data)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_delete_job_listing_success(self):
        response = self.client.delete(reverse('delete_job', kwargs={'job_id': self.job_listing.id}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(JobListing.objects.filter(id=self.job_listing.id).exists())

    def test_delete_job_listing_not_found(self):
        response = self.client.delete(reverse('delete_job', kwargs={'job_id': 999}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
