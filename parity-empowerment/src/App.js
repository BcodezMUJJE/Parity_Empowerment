import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Removed Link
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import BecomeA from './Components/BecomeA';
import AboutPage from './Components/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          {/* Home route with all components */}
          <Route path="/" element={
            <>
              <Home />
              <BecomeA />
            </>
          } />
          
          {/* About Us route */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;