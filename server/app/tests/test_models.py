from django.test import TestCase
from .models import JobListing

class JobListingModelTests(TestCase):
    def test_string_representation(self):
        job = JobListing(title='Software Engineer')
        self.assertEqual(str(job), job.title)

    def test_job_listing_creation(self):
        job = JobListing.objects.create(
            employer_id=1,
            title='Product Manager',
            description='Manage the product lifecycle.',
            company='Innovate LLC',
            location='New York',
            type='Part-Time'
        )
        self.assertIsInstance(job, JobListing)
        self.assertEqual(job.title, 'Product Manager')
