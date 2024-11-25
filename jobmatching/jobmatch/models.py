from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    skills_required = models.TextField()
    location = models.CharField(max_length=255)
    company = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class UserProfile(models.Model):
    name = models.CharField(max_length=255)
    skills = models.TextField()
    resume = models.FileField(upload_to='resumes/')
    # Add more fields as needed

    def __str__(self):
        return self.name
