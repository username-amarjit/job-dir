from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Job, UserProfile
from .serializers import JobSerializer, UserProfileSerializer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    @action(detail=True, methods=['get'])
    def recommend_jobs(self, request, pk=None):
        user_profile = self.get_object()  # Get the user profile
        user_skills = user_profile.skills

        # Fetch all jobs
        jobs = Job.objects.all()
        job_titles = [job.title for job in jobs]
        job_descriptions = [job.description for job in jobs]

        # Use TF-IDF Vectorizer to vectorize the job descriptions and user skills
        tfidf_vectorizer = TfidfVectorizer(stop_words='english')
        tfidf_matrix = tfidf_vectorizer.fit_transform(job_descriptions + [user_skills])
        
        # Compute cosine similarity between user skills and all job descriptions
        cosine_sim = cosine_similarity(tfidf_matrix[-1], tfidf_matrix[:-1])

        # Get the top 5 job recommendations based on cosine similarity
        top_jobs_indices = cosine_sim.argsort()[0, -5:][::-1]
        top_jobs = [jobs[i] for i in top_jobs_indices]

        # Serialize and return the recommended jobs
        job_serializer = JobSerializer(top_jobs, many=True)
        return Response(job_serializer.data)
