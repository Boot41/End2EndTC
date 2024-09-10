import React from 'react';
import JobSearchFilter from './JobSearchFilter'; 
import JobListing from './JobListing';

const JobSearchPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Fixed Header */}
            <header className="bg-white shadow-md p-4 fixed w-full z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Job Search</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#jobs" className="hover:text-blue-500">Jobs</a></li>
                            <li><a href="#about" className="hover:text-blue-500">About</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
            {/* Main Content Area */}
            <main className="flex-grow mt-16 container mx-auto p-4">
                <section className="bg-gray-100 p-4 rounded-lg mb-6">
                    {/* Job Search Filter Component */}
                    <JobSearchFilter />
                </section>

                <section>
                    {/* Job Listing Component */}
                    <JobListing />
                </section>
            </main>
        </div>
    );
};

export default JobSearchPage;