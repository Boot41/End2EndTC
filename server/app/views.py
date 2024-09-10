from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from .models import JobListing, JobApplication
from .serializers import JobListingSerializer

@api_view(['POST'])
def create_job_listing(request):
    if request.method == 'POST':
        serializer = JobListingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_job_listings(request, employer_id):
    if request.method == 'GET':
        job_listings = JobListing.objects.filter(employer_id=employer_id)
        serializer = JobListingSerializer(job_listings, many=True)
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)

@api_view(['GET'])
def fetch_job_listings(request):
    if request.method == 'GET':
        title = request.GET.get('title', None)
        location = request.GET.get('location', None)
        job_type = request.GET.get('type', None)
        posted_date = request.GET.get('posted_date', None)

        filters = {}
        if title:
            filters['title__icontains'] = title
        if location:
            filters['location__icontains'] = location
        if job_type:
            filters['type'] = job_type
        if posted_date:
            filters['created_at__date'] = posted_date

        job_listings = JobListing.objects.filter(**filters)
        serializer = JobListingSerializer(job_listings, many=True)
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)

@api_view(['GET'])
def fetch_job(request, job_id):
    try:
        job_listing = JobListing.objects.get(id=job_id)
        serializer = JobListingSerializer(job_listing)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK)
    except JobListing.DoesNotExist:
        return JsonResponse({'error': 'Job listing not found.'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['PUT'])
def update_job_listing(request, job_id):
    try:
        job_listing = JobListing.objects.get(id=job_id)
    except JobListing.DoesNotExist:
        return JsonResponse({'error': 'Job listing not found.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = JobListingSerializer(job_listing, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_200_OK)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_job_listing(request, job_id):
    try:
        job_listing = JobListing.objects.get(id=job_id)
        job_listing.delete()
        return JsonResponse({'message': 'Job listing deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
    except JobListing.DoesNotExist:
        return JsonResponse({'error': 'Job listing not found.'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def apply_for_job(request, job_id):
    if request.method == 'POST':
        seeker_id = request.data.get('seeker_id')
        if seeker_id is None:
            return JsonResponse({'error': 'Seeker ID is required.'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            job_listing = JobListing.objects.get(id=job_id)
            application = JobApplication.objects.create(job_listing=job_listing, seeker_id=seeker_id)
            return JsonResponse({'id': application.id, 'status': application.status}, status=status.HTTP_201_CREATED)
        except JobListing.DoesNotExist:
            return JsonResponse({'error': 'Job listing not found.'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def track_applications(request, seeker_id):
    if request.method == 'GET':
        applications = JobApplication.objects.filter(seeker_id=seeker_id)
        application_data = [{'job_listing_id': app.job_listing.id, 'status': app.status} for app in applications]
        return JsonResponse(application_data, safe=False, status=status.HTTP_200_OK)

@api_view(['PUT'])
def update_job_application(request, application_id):
    try:
        job_application = JobApplication.objects.get(id=application_id)
    except JobApplication.DoesNotExist:
        return JsonResponse({'error': 'Job application not found.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        status = request.data.get('status', None)
        if status in ['Accepted', 'Rejected', 'Pending']:
            job_application.status = status
            job_application.save()
            return JsonResponse({'status': job_application.status}, status=status.HTTP_200_OK)
        return JsonResponse({'error': 'Invalid status provided.'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def withdraw_job_application(request, application_id):
    try:
        job_application = JobApplication.objects.get(id=application_id)
        job_application.delete()
        return JsonResponse({'message': 'Job application withdrawn successfully.'}, status=status.HTTP_204_NO_CONTENT)
    except JobApplication.DoesNotExist:
        return JsonResponse({'error': 'Job application not found.'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def schedule_interview(request, application_id):
    try:
        job_application = JobApplication.objects.get(id=application_id)
    except JobApplication.DoesNotExist:
        return JsonResponse({'error': 'Job application not found.'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        interview_date = request.data.get('interview_date')
        if not interview_date:
            return JsonResponse({'error': 'Interview date is required.'}, status=status.HTTP_400_BAD_REQUEST)
        # Assumed here that you will save the interview schedule to a related model or field.
        # Placeholder for saving logic, e.g., job_application.schedule_interview(interview_date)
        return JsonResponse({'message': 'Interview scheduled successfully.', 'interview_date': interview_date}, status=status.HTTP_201_CREATED)