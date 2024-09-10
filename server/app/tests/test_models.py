from django.test import TestCase
from .models import JobListing

class JobListingModelTests(TestCase):
    def test_string_representation(self):
        job = JobListing(title='Software Engineer')
        self.assertEqual(str(job), job.title)
