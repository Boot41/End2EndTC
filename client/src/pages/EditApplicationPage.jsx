import React from 'react';

const EditApplicationPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-gray-800 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold">Site Logo</div>
          <div className="user-profile-icon">User Icon</div>
        </div>
      </header>

      <main className="flex-grow p-4">
        <ApplicationEditForm />
      </main>

      <footer className="bg-gray-800 text-white p-4 shadow-lg">
        <div className="text-center">Footer Content</div>
      </footer>
    </div>
  );
};

const ApplicationEditForm = () => {
  return (
    <form className="max-w-md mx-auto bg-white p-4 rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="jobTitle" className="block font-bold mb-1">Job Title</label>
        <input
          type="text"
          id="jobTitle"
          className="border rounded p-2 w-full"
          aria-required="true"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="companyName" className="block font-bold mb-1">Company Name</label>
        <input
          type="text"
          id="companyName"
          className="border rounded p-2 w-full"
          aria-required="true"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="applicationStatus" className="block font-bold mb-1">Application Status</label>
        <select
          id="applicationStatus"
          className="border rounded p-2 w-full"
          aria-required="true"
        >
          <option value="">Select Status</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="offer">Offer</option>
          <option value="declined">Declined</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="notes" className="block font-bold mb-1">Notes</label>
        <textarea
          id="notes"
          className="border rounded p-2 w-full"
          rows="4"
          aria-required="false"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Save Changes
      </button>

      {/* Feedback messages would be displayed here */}
    </form>
  );
};

export default EditApplicationPage;