import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const JobEditForm = ({ jobId, jobData }) => {
  const history = useHistory();
  const [formData, setFormData] = useState(jobData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Job title is required";
    if (!formData.description) newErrors.description = "Description is required";
    // Add more validations as necessary
    return newErrors;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to update job');
      // Display success notification here
    } catch (error) {
      console.error(error);
      // Display error notification here
    }
  };

  const handleCancel = () => {
    history.push('/dashboard');
  };

  return (
    <form style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ fontWeight: 'bold' }} htmlFor="title">Job Title*</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          style={{
            width: '100%', 
            borderRadius: '8px',
            background: '#f9f9f9',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            minHeight: '40px',
            padding: '12px',
          }}
          placeholder="Enter job title"
          aria-label="Job Title"
        />
        {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <label style={{ fontWeight: 'bold' }} htmlFor="description">Description*</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={{
            width: '100%', 
            borderRadius: '8px',
            background: '#f9f9f9',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            minHeight: '40px',
            padding: '12px',
          }}
          placeholder="Enter job description"
          aria-label="Job Description"
        />
        {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
      </div>

      {/* Additional fields for requirements, location, job type, application deadline */}

      <div>
        <button
          onClick={handleSave}
          style={{
            backgroundColor: '#340487',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 16px',
            cursor: 'pointer',
            marginRight: '8px',
          }}
          aria-label="Save Job"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          style={{
            backgroundColor: '#e1daf5',
            color: 'grey',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 16px',
            cursor: 'pointer',
          }}
          aria-label="Cancel Job Edit"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default JobEditForm;