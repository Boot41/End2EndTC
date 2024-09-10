import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const JobListing = () => {
  const [jobListings, setJobListings] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/jobs');
        setJobListings(response.data);
        setFilteredJobs(response.data);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleFilterChange = () => {
    const filtered = jobListings.filter(job => 
      (locationFilter ? job.location.includes(locationFilter) : true) &&
      (jobTypeFilter ? job.jobType.includes(jobTypeFilter) : true)
    );
    setFilteredJobs(filtered);
  };

  const handleViewDetails = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  const handleBookmark = (jobId) => {
    // Logic to bookmark the job
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="border rounded p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Filter by job type"
          value={jobTypeFilter}
          onChange={(e) => setJobTypeFilter(e.target.value)}
          className="border rounded p-2"
        />
        <button onClick={handleFilterChange} className="bg-blue-600 text-white p-2 rounded">
          Filter
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1">
        {filteredJobs.map(job => (
          <div key={job.id} className="border rounded shadow p-4 bg-white" aria-label={`Job title: ${job.title}`}>
            <h3 className="font-bold text-xl">{job.title}</h3>
            <p className="text-lg">{job.company}</p>
            <p className="text-md">{job.location}</p>
            <p className="text-md">{job.jobType}</p>
            <button 
              onClick={() => handleViewDetails(job.id)} 
              className="bg-blue-600 text-white p-2 rounded mt-2 hover:bg-blue-700"
              aria-label={`View details for ${job.title}`}
            >
              View Details
            </button>
            <button 
              onClick={() => handleBookmark(job.id)} 
              className="bg-gray-300 text-black p-2 rounded mt-2 ml-2 hover:bg-gray-400"
              aria-label={`Bookmark ${job.title}`}
            >
              Bookmark
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

JobListing.propTypes = {
  jobListings: PropTypes.array,
};

export default JobListing;