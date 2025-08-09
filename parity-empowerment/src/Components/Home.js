import React from 'react';
import './Home.css';
import heroImage from '../Assets/pat.jpeg'; // Make sure this path is correct
import AboutUs from './AboutUs';


const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section with Image Background */}
      <section 
        className="hero-section"
        style={{ backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), url(${heroImage})` }}
      >
        <div className="hero-content">
          <p className="hero-tagline">Parity Empowerment Initiative </p>
          <h1 className="hero-heading">
            Make an <span className="impact-text">Impact</span>
          </h1>
          <p className="hero-subheading">Every Change Matters</p>
        </div>
      </section>
      <section>
        <AboutUs />
      </section>
    </div>
  );
};

export default Home;