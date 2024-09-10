import React, { useEffect, useState } from 'react';

const ApplicationStatusTracker = () => {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    // Mock API call to fetch applications
    const response = await fetch('/api/applications');
    const data = await response.json();
    setApplications(data);
  };

  const handleRefresh = () => {
    fetchApplications();
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Offer':
        return 'green';
      case 'Interviewing':
        return 'blue';
      case 'Applied':
        return 'yellow';
      case 'Rejected':
        return 'red';
      default:
        return '';
    }
  };

  return (
    <div style={{ padding: '16px', backgroundColor: '#f9f9f9' }}>
      <button
        onClick={handleRefresh}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
          transition: 'background-color 0.3s ease',
        }}
        aria-label="Refresh job applications"
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
      >
        Refresh Applications
      </button>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {applications.map((application) => (
          <li
            key={application.id}
            style={{
              border: '1px solid #e0e0e0',
              marginBottom: '10px',
              padding: '16px',
              transition: 'background-color 0.3s ease',
              position: 'relative',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.setAttribute('title', `Description: ${application.description}, Contact: ${application.contact}`);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.removeAttribute('title');
            }}
          >
            <a
              href={`/applications/${application.id}`}
              style={{
                fontWeight: 'bold',
                fontSize: window.innerWidth < 768 ? '14px' : '16px',
                color: '#333',
                textDecoration: 'none'
              }}
              aria-label={`View details for ${application.jobTitle}`}
            >
              {application.jobTitle}
            </a>
            <div style={{ fontSize: '14px', color: '#666' }}>{application.companyName}</div>
            <div style={{ fontSize: '12px', color: '#999' }}>{new Date(application.submissionDate).toLocaleDateString()}</div>
            <span
              style={{
                display: 'inline-block',
                marginTop: '5px',
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: getStatusColor(application.status),
                color: '#fff'
              }}
            >
              {application.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationStatusTracker;