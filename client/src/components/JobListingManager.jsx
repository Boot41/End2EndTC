import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const JobListingManager = ({ employerId }) => {
  const [jobs, setJobs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(`/api/employers/${employerId}/jobs`);
      const data = await response.json();
      setJobs(data);
    };
    fetchJobs();
  }, [employerId]);

  const handleEdit = (jobId) => {
    history.push(`/edit/job/${jobId}`);
  };

  const handleDelete = async (jobId) => {
    if (window.confirm('Are you sure you want to delete this job listing?')) {
      await fetch(`/api/jobs/${jobId}`, {
        method: 'DELETE',
      });
      setJobs(jobs.filter(job => job.id !== jobId));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
      }}>
        <thead style={{ fontWeight: 'bold', fontSize: '16px' }}>
          <tr>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Job Title</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Company</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Location</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={job.id} style={{
              backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white',
              padding: '12px',
              border: '1px solid #ddd',
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#e2daf5' },
            }}>
              <td style={{ padding: '12px', border: '1px solid #ddd', fontSize: '14px' }}>{job.title}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd', fontSize: '14px' }}>{job.company}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd', fontSize: '14px' }}>{job.location}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                <button
                  onClick={() => handleEdit(job.id)}
                  style={{
                    backgroundColor: '#340487',
                    color: 'white',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginRight: '5px',
                  }}
                  aria-label={`Edit ${job.title} job`}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(job.id)}
                  style={{
                    backgroundColor: '#D1D5DB',
                    color: 'black',
                    padding: '10px 15px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                  aria-label={`Delete ${job.title} job`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobListingManager;