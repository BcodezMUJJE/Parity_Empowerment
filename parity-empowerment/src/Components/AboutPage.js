import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-header">
        <div className="header-content">
          <h1>Parity Empowerment Initiative (PEI)</h1>
          <p className="slogan">Every Change Matters</p>
          <p className="location">Uganda</p>
        </div>
      </header>

      <main className="about-content">
        <section className="mission-section">
          <div className="container">
            <h2>Our Mission</h2>
            <p>
              PEI is a financial sustainability and economic empowerment initiative dedicated to supporting grassroots marginalized organizations in Uganda. Our mission is to eliminate poverty, create employment opportunities, and drive long-term economic growth for marginalized communities.
            </p>
            <p>
              By securing funding and business development support, we ensure that marginalized organizations can build sustainable enterprises, employ community members, and achieve lasting financial independence.
            </p>
          </div>
        </section>

        <section className="purpose-section">
          <div className="container">
            <h2>Our Purpose</h2>
            <p className="emphasis">
              EMPOWERMENT INITIATIVE for women
            </p>
            <p>
              PEI seeks to empower diverse women in Uganda by removing economic barriers, supporting women-led grassroots organizations, fostering sustainable businesses, and promoting financial independence, creating an inclusive environment for all women to thrive.
            </p>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Empowerment</h3>
                <p>We believe in equipping women with the tools and resources they need to transform their lives and communities.</p>
              </div>
              <div className="value-card">
                <h3>Sustainability</h3>
                <p>We focus on creating long-term solutions that continue to benefit generations to come.</p>
              </div>
              <div className="value-card">
                <h3>Inclusivity</h3>
                <p>We serve all women regardless of background, creating equal opportunities for economic participation.</p>
              </div>
              <div className="value-card">
                <h3>Community</h3>
                <p>We work with and for the community, ensuring local ownership of all initiatives.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <div className="container">
            <h2>Our Impact</h2>
            <div className="impact-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Women-led organizations supported</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Jobs created</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Communities reached</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <div className="container">
          <p>Join us in creating lasting change for women in Uganda</p>
          <button className="cta-button">Get Involved</button>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;