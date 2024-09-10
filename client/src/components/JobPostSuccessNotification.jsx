import React from 'react';
import { useHistory } from 'react-router-dom';

const JobPostSuccessNotification = ({ isOpen, onClose }) => {
  const history = useHistory();

  if (!isOpen) return null; // Hide the notification if not open

  const handleViewListing = () => {
    history.push('/job-listing'); // Navigate to job listing page
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      style={{
        backgroundColor: '#340487',
        color: '#fff',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        maxWidth: '600px',
        margin: '20px auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p style={{ fontSize: '16px', margin: '0 0 10px' }}>
        Your job has been posted successfully!
      </p>
      <button
        onClick={handleViewListing}
        style={{
          backgroundColor: '#fff',
          color: '#340487',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          fontSize: '14px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e6e6e6')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
        aria-label="View your job listing"
      >
        View Listing
      </button>
    </div>
  );
};

export default JobPostSuccessNotification;