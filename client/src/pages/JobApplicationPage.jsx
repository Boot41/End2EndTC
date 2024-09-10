import React from 'react';

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-10">
    <nav className="flex justify-between items-center p-4">
      <h1 className="text-lg font-bold">Job Application</h1>
      <ul className="flex space-x-4">
        <li><a href="#home" className="text-gray-700 hover:text-gray-900">Home</a></li>
        <li><a href="#about" className="text-gray-700 hover:text-gray-900">About</a></li>
        <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const JobApplicationForm = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', resume: '' });
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    // Additional validation logic can be added here
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-16 p-4 bg-white shadow rounded">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="border p-2 w-full"
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <span className="text-red-500">{errors.name}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="border p-2 w-full"
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="resume" className="block text-gray-700">Resume:</label>
        <input 
          type="file" 
          id="resume" 
          name="resume" 
          onChange={handleChange} 
          className="border p-2 w-full"
          aria-required="true"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

const Footer = () => (
  <footer className="bg-gray-200 text-center py-4">
    <a href="#privacy" className="text-gray-700">Privacy Policy</a>
    <span className="mx-2">|</span>
    <a href="#terms" className="text-gray-700">Terms of Service</a>
  </footer>
);

const JobApplicationPage = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow flex justify-center items-start">
      <JobApplicationForm />
    </main>
    <Footer />
  </div>
);

export default JobApplicationPage;