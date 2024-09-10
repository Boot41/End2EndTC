import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployerDashboard from './pages/EmployerDashboard';
import EditJobPage from './pages/EditJobPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <header className="App-header">
          {/* Removed unnecessary code as per instructions */}
        </header>
        <Routes>
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/edit-job" element={<EditJobPage />} />
          {/* Other routes can be added here */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;