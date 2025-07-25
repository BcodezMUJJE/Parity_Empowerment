import React from 'react';
import './Footer.css';
import { FaInstagram, FaTiktok, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-section">
          <h3>PARITY EMPOWERMENT INITIATIVE</h3>
          <p>"EVERY CHANGE MATTERS"</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="/about">About Us</a>
            <a href="/programs">Our Programs</a>
            <a href="/get-involved">Get Involved</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/faq">FAQ</a>
          </div>
        </div>

        <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fparity_empowerment_initiative_%2F&is_from_rle" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.tiktok.com/@parityempowerment" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="icon" />
            </a>
            <a href="https://x.com/parity2025" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Parity Empowerment Initiative. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;