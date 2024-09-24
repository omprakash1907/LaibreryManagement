import React from 'react';
import Header from './components/Header'; // Import the Header component
import HomePage from './pages/HomePage'; // Example page
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header /> {/* Include the Header component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
