<!-- python -m venv job-matching-env
source job-matching-env/bin/activate  # On Windows use: job-matching-env\Scripts\activate
Sure! Here's the updated **README.md** with a creative, random name for the project:

--- -->

# JobFusion - The Ultimate Job Matchmaker

Welcome to **JobFusion** – a dynamic job matching platform that uses AI-driven technology to connect users with their ideal job opportunities based on their unique skills and profiles. Built with **Django Rest Framework** for the backend and **React** for the frontend, **JobFusion** is designed to make job searching smarter and faster.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup (Django Rest Framework)](#backend-setup-django-rest-framework)
  - [Frontend Setup (React)](#frontend-setup-react)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Tech Stack

- **Backend**: Django, Django Rest Framework
- **Frontend**: React, React Router v6
- **Machine Learning**: Scikit-learn (for basic job matching using TF-IDF)
- **Database**: SQLite (default in Django)
- **Additional Libraries**:
  - Axios (for HTTP requests)
  - react-router-dom (for routing)

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or above) - for running the React frontend
- **Python** (v3.8 or above) - for running the Django backend
- **pip** - for managing Python packages
- **npm** - for managing Node.js packages

---

## Setup Instructions

### Backend Setup (Django Rest Framework)

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/job-fusion.git
    cd job-fusion
    ```

2. Create a Python virtual environment:

    ```bash
    python -m venv venv
    ```

3. Activate the virtual environment:
    - On Windows:
      ```bash
      venv\Scripts\activate
      ```
    - On macOS/Linux:
      ```bash
      source venv/bin/activate
      ```

4. Install the required Python dependencies:

    ```bash
    pip install -r backend/requirements.txt
    ```

    **Note**: If you haven't already created the `requirements.txt` file, you can do so by running `pip freeze > requirements.txt` after installing the necessary packages.

5. Run migrations to set up the database:

    ```bash
    python backend/manage.py migrate
    ```

6. Create a superuser to access the Django admin:

    ```bash
    python backend/manage.py createsuperuser
    ```

    Follow the prompts to create the superuser account.

7. Start the Django development server:

    ```bash
    python backend/manage.py runserver
    ```

    The backend should now be running at `http://127.0.0.1:8000`.

---

### Frontend Setup (React)

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install the required Node.js dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

    The frontend should now be running at `http://localhost:3000`.

---

## Running the Application

Once both the backend and frontend servers are running:

1. Open `http://localhost:3000` in your browser to view the React frontend.
2. The application will allow users to create profiles with skills and a resume, which will be processed by the backend.
3. Job recommendations based on the user's skills will be displayed after profile creation.
<!-- 
### Sample Endpoints:
- **Create User Profile (POST)**: `http://127.0.0.1:8000/api/profiles/`
- **Get Recommended Jobs for a User Profile (GET)**: `http://127.0.0.1:8000/api/profiles/<profile_id>/recommend_jobs/` -->

---

## Folder Structure

```
job-fusion/
│
├── backend/                    # Django backend code
│   ├── jobmatch/               # App for jobs and user profiles
│   ├── manage.py               # Django project manager
│   └── requirements.txt        # Python dependencies
│
├── frontend/                   # React frontend code
│   ├── public/                 # Public assets
│   ├── src/                    # Source code for React components
│   ├── package.json            # Node.js dependencies and scripts
│   └── .env                    # Environment variables (optional)
│
└── README.md                   # This file
```

---

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

--- -->

Feel free to make any necessary modifications based on your specific project requirements or folder structure.

