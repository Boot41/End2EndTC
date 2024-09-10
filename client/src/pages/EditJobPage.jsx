import React from 'react';
import { Link } from 'react-router-dom';

// Header Component
const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 shadow">
    <Link to="/jobs" className="text-blue-400">Back</Link>
    <h1 className="text-xl text-center">Edit Job Listing</h1>
  </header>
);

// JobEditForm Component
const JobEditForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic and submission process here
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label htmlFor="title" className="block">Job Title:</label>
        <input type="text" id="title" name="title" className="border rounded w-full mb-2" />
        <span className="text-red-500" aria-live="polite">Error message here</span>
      </div>
      <div>
        <label htmlFor="description" className="block">Description:</label>
        <textarea id="description" name="description" className="border rounded w-full mb-2"></textarea>
        <span className="text-red-500" aria-live="polite">Error message here</span>
      </div>
      <div>
        <label htmlFor="location" className="block">Location:</label>
        <input type="text" id="location" name="location" className="border rounded w-full mb-2" />
        <span className="text-red-500" aria-live="polite">Error message here</span>
      </div>
      <div>
        <label htmlFor="salary" className="block">Salary:</label>
        <input type="number" id="salary" name="salary" className="border rounded w-full mb-2" />
        <span className="text-red-500" aria-live="polite">Error message here</span>
      </div>
      <button type="submit" className="bg-blue-500 text-white rounded p-2">Submit</button>
    </form>
  );
};

// Footer Component
const Footer = () => (
  <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow">
    <p className="text-center">
      <a href="/privacy" className="text-blue-400">Privacy Policy</a> | 
      <a href="/terms" className="text-blue-400">Terms of Service</a>
    </p>
  </footer>
);

// EditJobPage Layout
const EditJobPage = () => (
  <div className="flex flex-col min-h-screen pt-16">
    <Header />
    <main className="flex-grow bg-white p-4 overflow-auto">
      <JobEditForm />
    </main>
    <Footer />
  </div>
);

export default EditJobPage;