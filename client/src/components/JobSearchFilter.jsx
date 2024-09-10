import React, { useState } from 'react';

const JobSearchFilter = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [postedDate, setPostedDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    // Replace with actual API call
    await fetch(`/api/jobs?title=${jobTitle}&location=${location}&type=${jobType}&date=${postedDate}`);
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <label aria-labelledby="jobTitleLabel">
        <span id="jobTitleLabel" style={{ display: 'block', marginBottom: '8px' }}>Job Title</span>
        <input 
          type="text" 
          value={jobTitle} 
          onChange={(e) => setJobTitle(e.target.value)} 
          style={{ borderRadius: '5px', padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '16px', height: '40px', width: '100%' }} 
          aria-label="Job Title" 
        />
      </label>
      <label aria-labelledby="locationLabel">
        <span id="locationLabel" style={{ display: 'block', marginBottom: '8px' }}>Location</span>
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          style={{ borderRadius: '5px', padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '16px', height: '40px', width: '100%' }} 
          aria-label="Location" 
        />
      </label>
      <label aria-labelledby="jobTypeLabel">
        <span id="jobTypeLabel" style={{ display: 'block', marginBottom: '8px' }}>Job Type</span>
        <select 
          value={jobType} 
          onChange={(e) => setJobType(e.target.value)} 
          style={{ borderRadius: '5px', padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '16px', height: '40px', width: '100%' }} 
          aria-label="Job Type"
        >
          <option value="">Select Job Type</option>
          <option value="full_time">Full Time</option>
          <option value="part_time">Part Time</option>
          <option value="contract">Contract</option>
        </select>
      </label>
      <label aria-labelledby="postedDateLabel">
        <span id="postedDateLabel" style={{ display: 'block', marginBottom: '8px' }}>Posted Date</span>
        <select 
          value={postedDate} 
          onChange={(e) => setPostedDate(e.target.value)} 
          style={{ borderRadius: '5px', padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '16px', height: '40px', width: '100%' }} 
          aria-label="Posted Date"
        >
          <option value="">Select Posted Date</option>
          <option value="today">Today</option>
          <option value="this_week">This Week</option>
          <option value="this_month">This Month</option>
        </select>
      </label>
      <button 
        onClick={handleSearch} 
        disabled={loading} 
        style={{ 
          borderRadius: '5px', 
          padding: '12px', 
          backgroundColor: loading ? '#cccccc' : '#007bff', 
          color: 'white', 
          cursor: loading ? 'not-allowed' : 'pointer', 
          height: '45px' 
        }} 
        aria-label="Search Jobs"
        onMouseEnter={e => e.target.style.backgroundColor = loading ? '#cccccc' : '#0056b3'}
        onMouseLeave={e => e.target.style.backgroundColor = loading ? '#cccccc' : '#007bff'}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
};

export default JobSearchFilter;