import React from 'react';
import './BecomeA.css';

function BecomeA() {
  return (
    <div className="app">
      <div className="cards-container">
        <CallToActionCard
          title="Become a Mentor"
          description="Got wisdom and passion for guiding others? We've got meaningful mentorship opportunities."
          buttonText="Join Us Now"
          color="#FFD1DC" // Pastel pink
        />
        
        <CallToActionCard
          title="Become a Volunteer"
          description="Got skills and passion for justice? We've got meaningful work changing lives in Uganda!"
          buttonText="Join Us Now"
          color="#B5EAD7" // Mint green
        />
        
        <CallToActionCard
          title="Become a Donor"
          description="Got resources and passion for making a difference? We've got impactful projects."
          buttonText="Donate Now"
          color="#E2F0CB" // Soft green
        />
      </div>
    </div>
  );
}

function CallToActionCard({ title, description, buttonText, color }) {
  return (
    <div className="cta-card" style={{ backgroundColor: color }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="divider"></div>
      <button className="cta-button">{buttonText}</button>
    </div>
  );
}

export default BecomeA;