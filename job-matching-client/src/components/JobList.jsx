// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const JobList = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/jobs/')
//       .then(response => setJobs(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h1>Available Jobs</h1>
//       <ul>
//         {jobs.map(job => (
//           <li key={job.id}>
//             <h3>{job.title}</h3>
//             <p>{job.description}</p>
//             <p><strong>Skills:</strong> {job.skills_required}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default JobList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/jobs/')
      .then(response => setJobs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Available Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p><strong>Skills:</strong> {job.skills_required}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
