import React from 'react';

// Header Component
const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center">
    <h1 className="font-bold text-lg">Application Tracking</h1>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#status" className="hover:underline">Status</a></li>
        <li><a href="#help" className="hover:underline">Help</a></li>
        <li><a href="#contact" className="hover:underline">Contact Us</a></li>
      </ul>
    </nav>
  </header>
);

// ApplicationStatusTracker Component
const ApplicationStatusTracker = () => {
  const applications = [
    { title: "Frontend Developer", company: "Company A", date: "2023-01-15", status: "Applied" },
    { title: "Backend Developer", company: "Company B", date: "2023-02-10", status: "Interviewed" },
    { title: "Full Stack Developer", company: "Company C", date: "2023-03-05", status: "Offered" },
  ];

  return (
    <div className="p-4">
      <h2 className="font-bold mb-2">Your Applications</h2>
      <div className="mb-4">
        <label htmlFor="filter" className="block mb-1">Filter by Status:</label>
        <select id="filter" className="p-1 border">
          <option>All</option>
          <option>Applied</option>
          <option>Interviewed</option>
          <option>Offered</option>
        </select>
      </div>
      <ul className="space-y-4">
        {applications.map((app, index) => (
          <li key={index} className="border p-2">
            <h3 className="font-bold">{app.title} at {app.company}</h3>
            <p>Application Date: {app.date}</p>
            <p>Status: {app.status}</p>
            <button className="mt-2 bg-blue-600 text-white py-1 px-3" aria-label={`View details for ${app.title}`}>
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-200 text-center p-4 mt-4">
    <p>&copy; 2023 Application Tracker. All Rights Reserved.</p>
    <div>
      <a href="#help" className="text-blue-600 hover:underline">Help</a> | 
      <a href="#contact" className="text-blue-600 hover:underline"> Contact Us</a>
    </div>
  </footer>
);

// Main Page Layout
const ApplicationTrackingPage = () => (
  <div className="min-h-screen bg-white pt-16">
    <Header />
    <main className="mt-4">
      <ApplicationStatusTracker />
    </main>
    <Footer />
  </div>
);

export default ApplicationTrackingPage;