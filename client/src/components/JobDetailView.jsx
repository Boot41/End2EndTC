import React, { useEffect, useState } from 'react';

const JobDetailView = ({ jobId }) => {
  const [jobDetails, setJobDetails] = useState({});
  const [isSaved, setIsSaved] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState({
    description: true,
    requirements: true,
    benefits: true,
    application: true,
  });

  useEffect(() => {
    const fetchJobDetails = async () => {
      const response = await fetch(`/api/jobs/${jobId}`);
      const data = await response.json();
      setJobDetails(data);
    };
    fetchJobDetails();
  }, [jobId]);

  const handleSave = async () => {
    await fetch(`/api/save/${jobId}`, { method: 'POST' });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); // Show message for 3 seconds
  };

  const handleApply = () => {
    window.location.href = '/apply';
  };

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
          {jobDetails.title}
        </h1>
        <p style={{ fontWeight: '300' }}>{jobDetails.company}</p>
        <button
          onClick={handleSave}
          aria-label="Save Job"
          style={{
            borderRadius: '20px', 
            padding: '10px 20px', 
            backgroundColor: isSaved ? '#b89aff' : '#e0e0e0',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#b89aff')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = isSaved ? '#b89aff' : '#e0e0e0')}
        >
          Save Job
        </button>
      </header>

      <main>
        {['description', 'requirements', 'benefits', 'application'].map((section) => (
          <div
            key={section}
            style={{
              padding: '20px',
              margin: '10px 0',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          >
            <h2 onClick={() => toggleSection(section)} style={{ cursor: 'pointer' }}>
              {section.charAt(0).toUpperCase() + section.slice(1)} 
              <span style={{ marginLeft: '10px' }}>
                {collapsedSections[section] ? '+' : '-'}
              </span>
            </h2>
            {!collapsedSections[section] && (
              <p>{jobDetails[section]}</p>
            )}
          </div>
        ))}
      </main>

      <footer style={{ marginTop: '20px' }}>
        <button
          onClick={handleApply}
          aria-label="Apply Now"
          style={{
            width: '80%',
            maxWidth: '300px',
            padding: '15px',
            backgroundColor: '#340487', 
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Apply Now
        </button>
        <a href="/jobs" style={{ marginLeft: '10px', textDecoration: 'none', color: '#340487' }}>
          Back
        </a>
      </footer>

      {isSaved && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: '#b89aff',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          Job saved successfully!
        </div>
      )}
    </div>
  );
};

export default JobDetailView;