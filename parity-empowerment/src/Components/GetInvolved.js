import React from 'react';
import { useState } from 'react';
import './GetInvolved.css';

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState('volunteer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      interest: '',
      message: ''
    });
  };

  return (
    <div className="get-involved-container">
      <header className="involved-header">
        <div className="header-content">
          <h1>Join the Parity Empowerment Movement</h1>
          <p>Your participation can help create a more equitable world. Choose how you'd like to get involved.</p>
        </div>
      </header>

      <div className="involvement-tabs">
        <button 
          className={`tab-btn ${activeTab === 'volunteer' ? 'active' : ''}`}
          onClick={() => setActiveTab('volunteer')}
        >
          Volunteer
        </button>
        <button 
          className={`tab-btn ${activeTab === 'partner' ? 'active' : ''}`}
          onClick={() => setActiveTab('partner')}
        >
          Partner With Us
        </button>
        <button 
          className={`tab-btn ${activeTab === 'donate' ? 'active' : ''}`}
          onClick={() => setActiveTab('donate')}
        >
          Donate
        </button>
        <button 
          className={`tab-btn ${activeTab === 'careers' ? 'active' : ''}`}
          onClick={() => setActiveTab('careers')}
        >
          Careers
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'volunteer' && (
          <section className="volunteer-section">
            <div className="section-grid">
              <div className="content-left">
                <h2>Volunteer Opportunities</h2>
                <p>Join our team of passionate volunteers working to empower communities through education, mentorship, and advocacy programs.</p>
                
                <div className="opportunity-cards">
                  <div className="opportunity-card">
                    <h3>Community Mentorship</h3>
                    <p>Guide individuals in underserved communities through our empowerment programs.</p>
                    <span>4-8 hrs/month</span>
                  </div>
                  
                  <div className="opportunity-card">
                    <h3>Event Coordination</h3>
                    <p>Help organize and run our workshops, seminars, and fundraising events.</p>
                    <span>Flexible hours</span>
                  </div>
                  
                  <div className="opportunity-card">
                    <h3>Digital Advocacy</h3>
                    <p>Assist with social media, content creation, and online awareness campaigns.</p>
                    <span>Remote, flexible</span>
                  </div>
                </div>
              </div>
              
              <div className="form-right">
                <h3>Volunteer Interest Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="interest">Area of Interest</label>
                    <select 
                      id="interest" 
                      name="interest" 
                      value={formData.interest}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="mentorship">Community Mentorship</option>
                      <option value="events">Event Coordination</option>
                      <option value="digital">Digital Advocacy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Why are you interested in volunteering with us?</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">Submit Application</button>
                </form>
              </div>
            </div>
          </section>
        )}
        
        {activeTab === 'partner' && (
          <section className="partner-section">
            <h2>Partnership Opportunities</h2>
            <p>We collaborate with organizations, businesses, and institutions to amplify our impact.</p>
            
            <div className="partner-types">
              <div className="partner-type">
                <h3>Corporate Partnerships</h3>
                <p>Align your CSR initiatives with our empowerment programs through funding, employee volunteering, or matched giving.</p>
              </div>
              
              <div className="partner-type">
                <h3>Nonprofit Collaborations</h3>
                <p>Join forces with us to create synergistic programs that address systemic inequalities.</p>
              </div>
              
              <div className="partner-type">
                <h3>Academic Alliances</h3>
                <p>Partner with educational institutions to develop research-based empowerment solutions.</p>
              </div>
            </div>
            
            <div className="partner-cta">
              <p>Interested in exploring partnership opportunities?</p>
              <button className="cta-btn">Contact Our Partnerships Team</button>
            </div>
          </section>
        )}
        
        {activeTab === 'donate' && (
          <section className="donate-section">
            <h2>Support Our Mission</h2>
            <p className="donate-intro">Your financial contribution helps us sustain and expand our empowerment programs.</p>
            
            <div className="donation-options">
              <div className="donation-option">
                <h3>One-Time Donation</h3>
                <p>Make an immediate impact with a single contribution.</p>
                <div className="amount-buttons">
                  <button>$25</button>
                  <button>$50</button>
                  <button>$100</button>
                  <button>Other</button>
                </div>
              </div>
              
              <div className="donation-option highlighted">
                <h3>Monthly Giving</h3>
                <p>Sustain our work with reliable recurring support.</p>
                <div className="amount-buttons">
                  <button>$10/month</button>
                  <button>$25/month</button>
                  <button>$50/month</button>
                  <button>Other</button>
                </div>
                <p className="benefit-note">Monthly donors receive exclusive updates and impact reports.</p>
              </div>
              
              <div className="donation-option">
                <h3>Corporate Matching</h3>
                <p>Double your impact through employer matching programs.</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
            
            <div className="donation-impact">
              <h3>Your Donation at Work</h3>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span>$50</span>
                  <p>Provides educational materials for one student</p>
                </div>
                <div className="impact-stat">
                  <span>$150</span>
                  <p>Sponsors a workshop for 10 participants</p>
                </div>
                <div className="impact-stat">
                  <span>$500</span>
                  <p>Supports a month of mentorship programming</p>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {activeTab === 'careers' && (
          <section className="careers-section">
            <h2>Join Our Team</h2>
            <p>Build your career while making a difference in communities worldwide.</p>
            
            <div className="job-listings">
              <div className="job-card">
                <h3>Program Coordinator</h3>
                <p>Full-time | Remote with travel</p>
                <button className="view-details-btn">View Details</button>
              </div>
              
              <div className="job-card">
                <h3>Development Associate</h3>
                <p>Full-time | Hybrid (NYC preferred)</p>
                <button className="view-details-btn">View Details</button>
              </div>
              
              <div className="job-card">
                <h3>Community Outreach Specialist</h3>
                <p>Contract | West Africa Region</p>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
            
            <div className="talent-network">
              <h3>Not seeing the right role?</h3>
              <p>Join our talent network to be notified about future opportunities.</p>
              <div className="network-form">
                <input type="email" placeholder="Your email address" />
                <button>Join Network</button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default GetInvolved;