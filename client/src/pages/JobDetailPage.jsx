import React, { useState } from 'react';

const JobDetailPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center p-4 z-10">
        <div className="flex items-center">
          <img src="logo.png" alt="Company Logo" className="h-8 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#jobs" className="hover:text-blue-600">Jobs</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <button 
          className="md:hidden" 
          onClick={() => setIsNavOpen(!isNavOpen)} 
          aria-label="Toggle Navigation"
          aria-expanded={isNavOpen}
        >
          Menu
        </button>
        {isNavOpen && (
          <nav className="flex flex-col absolute top-14 right-0 bg-white w-48 shadow-md md:hidden">
            <a href="#about" className="p-2 hover:text-blue-600">About</a>
            <a href="#jobs" className="p-2 hover:text-blue-600">Jobs</a>
            <a href="#contact" className="p-2 hover:text-blue-600">Contact</a>
          </nav>
        )}
      </header>

      {/* Main Content Section */}
      <main className="flex-grow pt-16 md:pt-20 px-4 md:px-16">
        <JobDetailView />
      </main>

      {/* Footer Section */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4">
        <div className="flex justify-between items-center text-sm">
          <span>Contact: info@company.com</span>
          <div className="space-x-4">
            <a href="#privacy" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#terms" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const JobDetailView = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Job Title</h1>
      <h2 className="text-xl font-semibold">Company Name</h2>
      <p className="mt-4">Job Description: Detailed information about the job listing.</p>
      <h3 className="mt-4 font-semibold">Requirements:</h3>
      <ul className="list-disc list-inside">
        <li>Requirement 1</li>
        <li>Requirement 2</li>
      </ul>
      <h3 className="mt-4 font-semibold">Benefits:</h3>
      <ul className="list-disc list-inside">
        <li>Benefit 1</li>
        <li>Benefit 2</li>
      </ul>
      <button 
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded" 
        onClick={() => {/* Logic to open modal */}} 
        aria-label="Apply for this job"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobDetailPage;