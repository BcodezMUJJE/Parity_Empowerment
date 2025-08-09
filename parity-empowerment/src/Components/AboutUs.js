import React from 'react';
import './AboutUs.css';
import aboutImage from '../Assets/mama1.jpg'; // Replace with your actual image

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>About Parity Empowerment Initiative</h1>
          <p className="slogan">"Every Change Matters"</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Our Mission</h2>
            <p>
              PEI is a financial sustainability and economic empowerment initiative dedicated to supporting grassroots marginalized organizations in Uganda. We are committed to eliminating poverty, creating employment opportunities, and driving long-term economic growth for marginalized communities.
            </p>
            <p>
              By securing funding and providing business development support, we enable marginalized organizations to build sustainable enterprises, employ community members, and achieve lasting financial independence.
            </p>
          </div>
          <div className="image-content">
            <img src={aboutImage} alt="PEI team working in Uganda" />
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="purpose-section">
        <h2>Our Purpose: Empowerment Initiative</h2>
        <div className="purpose-cards">
          <div className="purpose-card">
            <h3>Remove Barriers</h3>
            <p>Breaking down economic obstacles that prevent women from achieving financial independence</p>
          </div>
          <div className="purpose-card">
            <h3>Support Organizations</h3>
            <p>Strengthening women-led grassroots organizations with resources and training</p>
          </div>
          <div className="purpose-card">
            <h3>Foster Businesses</h3>
            <p>Helping establish and grow sustainable women-owned businesses</p>
          </div>
          <div className="purpose-card">
            <h3>Create Inclusion</h3>
            <p>Building an environment where all women can thrive economically</p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <h2>Based in Uganda, Making Global Impact</h2>
        <p>
          While our primary focus is on empowering marginalized communities across Uganda, our model of sustainable economic empowerment has the potential to inspire similar initiatives worldwide.
        </p>
        <div className="map-container">
          <iframe
            title="PEI Location in Uganda"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085952.891934665!2d31.399207262500013!3d1.3707292999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a69f6499f945%3A0x874155ce43014549!2sUganda!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;