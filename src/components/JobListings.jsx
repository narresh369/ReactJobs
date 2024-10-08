import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

//const apiUrl1 = import.meta.env.VITE_API_URL;
//const apiUrl1 = import.meta.env.VITE_API_URL || 'https://reactjobs.onrender.com';
//const apiUrl1 = import.meta.env.VITE_API_URL || 'http://localhost:8000';
//const apiUrl1 = import.meta.env.REACT_APP || 'http://localhost:8000';
//const apiUrl1 = import.meta.env.REACT_APP || 'https://jsonserver-ozak.onrender.com';//FOR RENDER.COM DEPLOYMENT - dist FOLDER

const apiUrl1 = 'https://jsonserver-ozak.onrender.com';//FOR FIREBASE DEPLOYMENT - dist FOLDER


console.log('apiUrl1 REACT_APP:: ' + apiUrl1);
console.log('apiUrl1 REACT_APP:: ' + apiUrl1);

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      //const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      const apiUrl = isHome ? `${apiUrl1}/jobs?_limit=3` : `${apiUrl1}/jobs`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data sorry..', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default JobListings;
