import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container bg-light py-5">
      <div className="container">
        <div className="row footer-content">
          <div className="col-lg-4 footer-section mb-4">
            <h3>ABOUT BARK</h3>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div className="col-lg-4 footer-section mb-4">
            <h3>OUR PRODUCTS</h3>
            <ul className="list-unstyled footer-links">
              <li><a href="#">BarkBox</a></li>
              <li><a href="#">Super Chewer</a></li>
              <li><a href="#">Dental</a></li>
              <li><a href="#">Food</a></li>
            </ul>
          </div>

          <div className="col-lg-4 footer-section mb-4">
            <h3>FOLLOW US</h3>
            <div className="d-flex gap-3 social-icons">
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaPinterest /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <hr className="footer-divider my-4" />

        <div className="row footer-bottom text-center text-md-start">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0">©2025 BarkBox. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end footer-policies d-flex flex-wrap gap-3 justify-content-center justify-content-md-end">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
            <a href="#">California Supply Chains Act</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
