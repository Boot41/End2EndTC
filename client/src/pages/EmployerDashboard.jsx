import React from 'react';
import JobPostingForm from './JobPostingForm';
import JobListingManager from './JobListingManager';

const EmployerDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10 p-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Employer Dashboard</h1>
        <nav>
          <a href="/home" className="mx-2">Home</a>
          <a href="/profile" className="mx-2">Profile</a>
          <a href="/settings" className="mx-2">Settings</a>
        </nav>
      </header>

      <main className="flex-grow pt-16 p-4">
        <JobPostingForm />
        <JobListingManager />
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div>
          <a href="/terms" className="mx-2">Terms of Service</a>
          <a href="/privacy" className="mx-2">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default EmployerDashboard;