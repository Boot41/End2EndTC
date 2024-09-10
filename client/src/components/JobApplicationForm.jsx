import React, { useState } from 'react';

const JobApplicationForm = ({ jobId }) => {
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [details, setDetails] = useState('');
  const [errors, setErrors] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!resume) validationErrors.resume = 'Resume is required.';
    if (!coverLetter) validationErrors.coverLetter = 'Cover letter is required.';
    if (!details) validationErrors.details = 'Additional details are required.';
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('coverLetter', coverLetter);
    formData.append('details', details);

    try {
      const response = await fetch(`/api/jobs/${jobId}/apply`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Submission failed.');

      alert('Application submitted successfully!'); // Notification for success
    } catch (error) {
      alert('Error submitting application: ' + error.message); // Notification for error
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <label htmlFor="resume" style={{ marginBottom: '8px' }}>
        Upload Resume
        <input
          type="file"
          id="resume"
          onChange={(e) => setResume(e.target.files[0])}
          style={{
            margin: '8px 0',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
          aria-labelledby="resume"
        />
        {errors.resume && <span style={{ color: 'red' }}>{errors.resume}</span>}
      </label>

      <label htmlFor="coverLetter" style={{ marginBottom: '8px' }}>
        Cover Letter
        <textarea
          id="coverLetter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          style={{
            margin: '8px 0',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
          aria-labelledby="coverLetter"
        />
        {errors.coverLetter && <span style={{ color: 'red' }}>{errors.coverLetter}</span>}
      </label>

      <label htmlFor="details" style={{ marginBottom: '8px' }}>
        Additional Details
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          style={{
            margin: '8px 0',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
          aria-labelledby="details"
        />
        {errors.details && <span style={{ color: 'red' }}>{errors.details}</span>}
      </label>
      
      <button
        type="submit"
        style={{
          backgroundColor: '#340487',
          color: 'white',
          padding: '10px 16px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '16px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4A008B'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#340487'}
      >
        Submit Application
      </button>
    </form>
  );
};

export default JobApplicationForm;