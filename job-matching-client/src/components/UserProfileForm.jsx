// import React, { useState } from 'react';
// import axios from 'axios';

// const UserProfileForm = () => {
//   const [profile, setProfile] = useState({ name: '', skills: '', resume: null });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setProfile({ ...profile, resume: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', profile.name);
//     formData.append('skills', profile.skills);
//     formData.append('resume', profile.resume);

//     axios.post('http://127.0.0.1:8000/api/profiles/', formData)
//       .then(response => alert('Profile created!'))
//       .catch(error => console.error(error));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" placeholder="Your Name" onChange={handleInputChange} />
//       <input type="text" name="skills" placeholder="Your Skills" onChange={handleInputChange} />
//       <input type="file" name="resume" onChange={handleFileChange} />
//       <button type="submit">Submit Profile</button>
//     </form>
//   );
// };

// export default UserProfileForm;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserProfileForm = () => {
  const [profile, setProfile] = useState({
    name: "",
    skills: "",
    resume: null,
  });
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const history = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    setProfile({ ...profile, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", profile.name);
    formData.append("skills", profile.skills);
    formData.append("resume", profile.resume);

    axios
      .post("http://127.0.0.1:8000/api/profiles/", formData)
      .then((response) => {
        alert("Profile created!");
        fetchRecommendedJobs(response.data.id);
      })
      .catch((error) => console.error(error));
  };

  const fetchRecommendedJobs = (profileId) => {
    axios
      .get(`http://127.0.0.1:8000/api/profiles/${profileId}/recommend_jobs/`)
      .then((response) => setRecommendedJobs(response.data))
      .catch((error) =>
        console.error("Error fetching recommended jobs:", error)
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="skills"
          placeholder="Your Skills"
          onChange={handleInputChange}
        />
        <input type="file" name="resume" onChange={handleFileChange} />
        <button type="submit">Submit Profile</button>
      </form>

      {recommendedJobs.length > 0 && (
        <div>
          <h2>Recommended Jobs</h2>
          <ul>
            {recommendedJobs.map((job) => (
              <li key={job.id}>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <p>
                  <strong>Skills Required:</strong> {job.skills_required}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileForm;
