import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ApplicationEditForm = ({ applicationId }) => {
  const [resume, setResume] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleUpdateApplication = async () => {
    setIsLoading(true);
    try {
      const response = await axios.put(`/api/applications/${applicationId}`, {
        resume,
        coverLetter,
        additionalDetails,
      });
      setMessage({ text: 'Application updated successfully!', type: 'success' });
    } catch (error) {
      setMessage({ text: 'Failed to update application.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/application-tracking');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Edit Application</h2>
      {message && <div style={{ color: message.type === 'success' ? 'green' : 'red' }}>{message.text}</div>}
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="resume">Resume</label>
        <input
          type="text"
          id="resume"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          style={{
            width: '100%',
            padding: window.innerWidth < 768 ? '10px' : '12px',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            marginTop: '8px'
          }}
          required
          aria-label="Resume"
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="coverLetter">Cover Letter</label>
        <input
          type="text"
          id="coverLetter"
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          style={{
            width: '100%',
            padding: window.innerWidth < 768 ? '10px' : '12px',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            marginTop: '8px'
          }}
          required
          aria-label="Cover Letter"
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label htmlFor="additionalDetails">Additional Details</label>
        <input
          type="text"
          id="additionalDetails"
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
          style={{
            width: '100%',
            padding: window.innerWidth < 768 ? '10px' : '12px',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            marginTop: '8px'
          }}
          aria-label="Additional Details"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={handleUpdateApplication}
          disabled={isLoading}
          style={{
            backgroundColor: '#340487',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </button>
        <button
          onClick={handleCancel}
          style={{
            border: '1px solid #D1D5DB',
            padding: '10px 20px',
            borderRadius: '5px',
            width: '120px'
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ApplicationEditForm;