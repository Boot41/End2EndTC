import React from 'react';
import JobPostingForm from './JobPostingForm';
import JobListingManager from './JobListingManager';
import JobPostSuccessNotification from './JobPostSuccessNotification';

const EmployerDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-lg font-bold">Employer Dashboard</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Job Listings</a></li>
            <li><a href="#" className="hover:underline">Profile</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <JobPostingForm />

        <div className="my-6">
          <JobListingManager />
        </div>

        <JobPostSuccessNotification />
      </main>
    </div>
  );
};

export default EmployerDashboard;