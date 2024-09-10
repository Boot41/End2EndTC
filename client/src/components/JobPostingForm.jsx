import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    job_title: '',
    description: '',
    requirements: '',
    location: '',
    job_type: '',
    application_deadline: ''
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePostJob = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/jobs', formData);
      alert('Job posted successfully!'); // Consider implementing a better notification system
      history.push('/dashboard');
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <form 
      onSubmit={handlePostJob} 
      style={{ 
        backgroundColor: '#F5F5F5', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        borderRadius: '8px', 
        padding: '20px', 
        maxWidth: '600px',
        margin: 'auto',
        width: '80%'
      }}
      aria-label="Job Posting Form"
    >
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="job_title">Job Title</label>
        <input 
          type="text" 
          name="job_title" 
          id="job_title" 
          value={formData.job_title} 
          onChange={handleChange} 
          required 
          style={{ 
            width: '100%', 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid #ccc' 
          }} 
          aria-label="Job Title"
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="description">Job Description</label>
        <textarea 
          name="description" 
          id="description" 
          value={formData.description} 
          onChange={handleChange} 
          required 
          style={{ 
            width: '100%', 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid #ccc',
            resize: 'vertical' 
          }} 
          aria-label="Job Description"
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="requirements">Requirements</label>
        <textarea 
          name="requirements" 
          id="requirements" 
          value={formData.requirements} 
          onChange={handleChange} 
          required 
          style={{
            width: '100%', 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid #ccc',
            resize: 'vertical' 
          }} 
          aria-label="Requirements"
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="location">Location</label>
        <input 
          type="text" 
          name="location" 
          id="location" 
          value={formData.location} 
          onChange={handleChange} 
          required 
          style={{ 
            width: '100%', 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid #ccc' 
          }} 
          aria-label="Location"
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="job_type">Job Type</label>
        <select 
          name="job_type" 
          id="job_type" 
          value={formData.job_type} 
          onChange={handleChange} 
          required 
          style={{ 
            width: '100%', 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid #ccc' 
          }} 
          aria-label="Job Type"
        >
          <option value="" disabled>Select job type</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="application_deadline">Application Deadline</label>
        <input 
          type="date" 
          name="application_deadline" 
          id="application_deadline" 
          value={formData.application_deadline} 
          onChange={handleChange} 
          required 
          style={{ 
            width: '100%', 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid #ccc' 
          }} 
          aria-label="Application Deadline"
        />
      </div>
      <button 
        type="submit" 
        style={{ 
          backgroundColor: '#340487', 
          color: 'white', 
          padding: '10px 15px', 
          borderRadius: '5px', 
          border: 'none', 
          cursor: 'pointer' 
        }} 
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#5A0B9A'} 
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#340487'} 
        aria-label="Submit Job Posting"
      >
        Submit
      </button>
    </form>
  );
};

export default JobPostingForm;