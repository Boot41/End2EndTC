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
