import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Custom CSS for styling
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import linkedin from "../components/imgs/footer/linkedin.jpg"
import instagram from "../components/imgs/footer/instegram.jpg"
import facebook from "../components/imgs/footer/facebook.jpg"
import tiktok from "../components/imgs/footer/tiktok.jpg"


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section shop">
          <h3>Shop</h3>
          <Link to="/Laptop">All</Link>
          <Link to="/">Home & Living</Link>
          <Link to="/Accessories">Accessories</Link>
          <Link to="/Laptop">Shop</Link>
          <Link to="/sale">Sale</Link>
        </div>

        <div className="footer-section helpful-links">
          <h3>Helpful Links</h3>
          <Link to="/faq">FAQ</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/shipping-policy">Shipping Policy</Link>
          <Link to="/refund-policy">Refund Policy</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:info@mysite.com">info@mysite.com</a></p>
          <p>Phone: <a href="tel:+1234567890">123-456-7890</a></p>
          <p>Address: 500 Terry Francine Street, San Francisco, CA 94158</p>
          <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={linkedin} className="icon linkedin" /> <i className='fab fa-linkedin'><img src={linkedin} alt="" /></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={instagram} className="icon instagram" /> <i className='fab fa-instagram'><img src={instagram} alt="" /></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <i className='fab fa-facebook'><img src={facebook} alt="" /></i>
                <FontAwesomeIcon icon={facebook} className="icon facebook" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"> <i className='fab fa-tiktok'><img src={tiktok} alt="" /></i>
                <FontAwesomeIcon icon={tiktok} className="icon tiktok" />
              </a>
          </div>
        </div>

        <div className="footer-section subscribe">
          <h3>Subscribe</h3>
          <p>Subscribe to our newsletter to hear about new arrivals, events, and offers.</p>
          <form>
            <input type="email" placeholder="Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Enjoy   <Link to="/" >Enjoy</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
