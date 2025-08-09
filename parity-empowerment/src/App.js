import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import BecomeA from './Components/BecomeA';
import AboutPage from './Components/AboutPage';
import Donate from './Components/Donate';
import Programs from './Components/Programs';
import GetInvolved from './Components/GetInvolved';
// Import other components for Programs, GetInvolved, Contact if they exist

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <BecomeA />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/program" element={<Programs />} /> 
          <Route path="/get-involved" element={<GetInvolved />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;