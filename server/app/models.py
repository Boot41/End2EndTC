from django.db import models

class JobListing(models.Model):
    employer_id = models.ForeignKey('Employer', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    company = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    type = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class JobApplication(models.Model):
    job_listing = models.ForeignKey(JobListing, on_delete=models.CASCADE)
    seeker_id = models.IntegerField()  # Assuming seeker_id is an integer
    applied_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, default='Pending')  # 'Pending', 'Accepted', 'Rejected'

    def __str__(self):
        return f'{self.seeker_id} applied for {self.job_listing.title}'