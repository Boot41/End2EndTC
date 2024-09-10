import React, { useState } from 'react';
import ApplicationStatusTracker from './ApplicationStatusTracker';
import WithdrawApplicationButton from './WithdrawApplicationButton';

const ApplicationTrackingPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleWithdrawClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const confirmWithdrawal = () => {
    // Logic for withdrawing the application
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Application Tracker</h1>
        <button className="bg-red-500 p-2 rounded" aria-label="Logout">Logout</button>
      </header>
      <main className="mt-16 flex-grow p-4 flex flex-col items-center justify-center">
        <ApplicationStatusTracker />
        <WithdrawApplicationButton onClick={handleWithdrawClick} />
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50" role="dialog" aria-modal="true">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold">Confirm Withdrawal</h2>
            <p>Are you sure you want to withdraw your application?</p>
            <div className="flex justify-between mt-4">
              <button onClick={confirmWithdrawal} className="bg-green-500 text-white px-4 py-2 rounded">Yes</button>
              <button onClick={closeModal} className="bg-gray-300 px-4 py-2 rounded">No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationTrackingPage;