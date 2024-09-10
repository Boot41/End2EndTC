from django.test import TestCase
from .models import JobListing, JobApplication

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

class JobApplicationModelTests(TestCase):
    def setUp(self):
        self.job_listing = JobListing.objects.create(
            employer_id=1,
            title='Software Engineer',
            description='Develop software.',
            company='Tech Corp',
            location='Remote',
            type='Full-Time'
        )

    def test_job_application_creation(self):
        application = JobApplication.objects.create(job_listing=self.job_listing, seeker_id=1)
        self.assertIsInstance(application, JobApplication)
        self.assertEqual(application.job_listing, self.job_listing)
        self.assertEqual(application.seeker_id, 1)
        self.assertEqual(application.status, 'Pending')
