import React from 'react';

// EmployerDashboard functional component
const EmployerDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="bg-blue-800 text-white p-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Company Branding</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-blue-300">Home</a></li>
              <li><a href="/jobs" className="hover:text-blue-300">My Jobs</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4">
          {/* Job Posting Form Section */}
          <section className="mb-8">
            <JobPostingForm />
          </section>

          {/* Job Listing Manager Section */}
          <section>
            <JobListingManager />
          </section>
        </div>
      </main>

      {/* Fixed Footer */}
      <footer className="bg-blue-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>Contact us at: info@company.com</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-blue-300">Facebook</a>
            <a href="#" className="hover:text-blue-300">Twitter</a>
            <a href="#" className="hover:text-blue-300">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// JobPostingForm component
const JobPostingForm = () => {
  // form submission logic and state management can be added here
  return (
    <form className="border p-4 shadow-md rounded bg-gray-100">
      <h2 className="text-lg font-bold mb-4">Post a New Job</h2>
      <div className="mb-4">
        <label htmlFor="jobTitle" className="block mb-2">Job Title</label>
        <input type="text" id="jobTitle" className="w-full p-2 border rounded" aria-required="true" />
      </div>
      <div className="mb-4">
        <label htmlFor="jobDescription" className="block mb-2">Job Description</label>
        <textarea id="jobDescription" className="w-full p-2 border rounded" aria-required="true"></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="jobRequirements" className="block mb-2">Requirements</label>
        <textarea id="jobRequirements" className="w-full p-2 border rounded" aria-required="true"></textarea>
      </div>
      <button type="submit" className="bg-blue-800 text-white py-2 px-4 rounded">Submit</button>
    </form>
  );
};

// JobListingManager component
const JobListingManager = () => {
  // Sample data for job listings
  const jobListings = [
    { id: 1, title: 'Software Engineer', description: 'Develop and maintain software applications.' },
    { id: 2, title: 'Product Manager', description: 'Lead product strategy and execution.' },
    { id: 3, title: 'UX/UI Designer', description: 'Design user interfaces and improve user experiences.' },
    // More job listings...
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobListings.map(job => (
        <div key={job.id} className="border p-4 shadow-md rounded bg-gray-100">
          <h3 className="font-bold">{job.title}</h3>
          <p>{job.description}</p>
          <div className="mt-4">
            <button className="text-blue-600 hover:underline mr-2">Edit</button>
            <button className="text-red-600 hover:underline">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Exporting EmployerDashboard
export default EmployerDashboard;