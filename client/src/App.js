import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployerDashboard from './pages/EmployerDashboard';
import EditJobPage from './pages/EditJobPage';
import JobSearchPage from './pages/JobSearchPage';
import JobDetailPage from './pages/JobDetailPage';
import JobApplicationPage from './pages/JobApplicationPage'; 
import ApplicationTrackingPage from './pages/ApplicationTrackingPage'; 
import EditApplicationPage from './pages/EditApplicationPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/edit-job" element={<EditJobPage />} />
          <Route path="/job-search" element={<JobSearchPage />} />
          <Route path="/job-detail" element={<JobDetailPage />} />
          <Route path="/job-application" element={<JobApplicationPage />} /> 
          <Route path="/application-tracking" element={<ApplicationTrackingPage />} />
          <Route path="/edit-application" element={<EditApplicationPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;