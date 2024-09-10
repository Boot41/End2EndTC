import React, { useState } from 'react';

const JobSearchPage = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching for:', jobTitle, location);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-500 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">JobSearch</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow p-4">
        <section className="mb-6">
          <JobSearchFilter 
            jobTitle={jobTitle} 
            setJobTitle={setJobTitle}
            location={location}
            setLocation={setLocation}
            handleSearch={handleSearch}
          />
        </section>
        <section>
          <JobListing />
        </section>
      </main>
    </div>
  );
};

const JobSearchFilter = ({ jobTitle, setJobTitle, location, setLocation, handleSearch }) => {
  return (
    <div className="flex flex-col md:flex-row mb-4">
      <label className="flex-grow mb-2 md:mr-2">
        <span className="sr-only">Job Title</span>
        <input 
          type="text" 
          value={jobTitle} 
          onChange={(e) => setJobTitle(e.target.value)} 
          placeholder="Job Title"
          className="border rounded p-2 w-full"
          aria-label="Job Title"
        />
      </label>
      <label className="flex-grow mb-2 md:mr-2">
        <span className="sr-only">Location</span>
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder="Location"
          className="border rounded p-2 w-full"
          aria-label="Location"
        />
      </label>
      <button 
        onClick={handleSearch} 
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        aria-label="Search"
      >
        Search
      </button>
    </div>
  );
};

const JobListing = () => {
  // Sample job data for demonstration
  const jobs = [
    { title: 'Frontend Developer', company: 'Tech Co', location: 'Remote', date: '1 day ago' },
    { title: 'Backend Developer', company: 'Web Inc', location: 'NYC', date: '3 days ago' },
    // Add more job objects as required
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

const JobCard = ({ job }) => {
  const handleApply = () => {
    // Implement apply functionality
    alert(`Applied for ${job.title}`);
  };

  const handleSave = () => {
    // Implement save functionality
    alert(`Saved ${job.title}`);
  };

  return (
    <div className="border rounded p-4 shadow hover:shadow-lg">
      <h2 className="font-bold">{job.title}</h2>
      <p className="text-gray-700">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <p className="text-gray-400">{job.date}</p>
      <div className="mt-4">
        <button 
          onClick={handleApply} 
          className="bg-green-600 text-white p-2 rounded mr-2 hover:bg-green-700"
          aria-label="Apply"
        >
          Apply
        </button>
        <button 
          onClick={handleSave} 
          className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
          aria-label="Save"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default JobSearchPage;