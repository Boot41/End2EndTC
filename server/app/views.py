from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from .models import JobListing
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
