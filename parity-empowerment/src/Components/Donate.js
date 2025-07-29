import React, { useState } from 'react';
import { FaPaypal, FaCreditCard, FaMobileAlt, FaUniversity, FaLock } from 'react-icons/fa';
import './Donate.css';

function Donate() {
  const [donationData, setDonationData] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
    paymentMethod: 'paypal'
  });

  const paymentIcons = {
    paypal: <FaPaypal className="payment-icon" />,
    credit: <FaCreditCard className="payment-icon" />,
    mobile: <FaMobileAlt className="payment-icon" />,
    bank: <FaUniversity className="payment-icon" />
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation submitted:', donationData);
    alert(`Thank you for your $${donationData.amount} donation via ${donationData.paymentMethod}!`);
    setDonationData({
      name: '',
      email: '',
      amount: '',
      message: '',
      paymentMethod: 'paypal'
    });
  };

  return (
    <div className="donate-page">
      <div className="donate-container">
        <h1>Support Our Cause</h1>
        <p className="subtitle">Your donation helps empower women in Uganda through sustainable economic initiatives</p>
        
        <div className="donation-content">
          <div className="payment-options">
            <h2>Choose Payment Method</h2>
            <div className="payment-methods">
              {Object.entries({
                paypal: 'PayPal',
                credit: 'Credit Card',
                mobile: 'Mobile Money',
                bank: 'Bank Transfer'
              }).map(([key, label]) => (
                <button
                  key={key}
                  className={`payment-btn ${donationData.paymentMethod === key ? 'active' : ''}`}
                  onClick={() => setDonationData({...donationData, paymentMethod: key})}
                  type="button"
                >
                  <div className="payment-icon-container">
                    {paymentIcons[key]}
                  </div>
                  {label}
                </button>
              ))}
            </div>
            
            <div className="quick-donate">
              <h3>Quick Donate Amounts</h3>
              <div className="amount-options">
                {[10, 25, 50, 100, 250].map(amount => (
                  <button 
                    key={amount}
                    className="amount-btn"
                    onClick={() => setDonationData({...donationData, amount})}
                    type="button"
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <form className="donation-form" onSubmit={handleSubmit}>
            <h2>Donation Information</h2>
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={donationData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={donationData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="amount">Donation Amount ($) *</label>
              <input
                type="number"
                id="amount"
                name="amount"
                min="1"
                value={donationData.amount}
                onChange={handleChange}
                required
                placeholder="Enter amount"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={donationData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Any special instructions or dedication"
              />
            </div>
            
            <div className="form-group checkbox-group">
              <input 
                type="checkbox" 
                id="recurring" 
                name="recurring" 
                className="recurring-checkbox"
              />
              <label htmlFor="recurring">Make this a monthly recurring donation</label>
            </div>
            
            <button type="submit" className="submit-btn">
              Donate Now
            </button>
            
            <p className="security-note">
              <FaLock className="lock-icon" /> Your donation is secure and encrypted
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donate;