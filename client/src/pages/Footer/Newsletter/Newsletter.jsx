import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <div className="small-text">Newsletter</div>
        <span className="big-text">Subscribe to our Newsletter</span>
        <div className="form">
          <input type="text" placeholder="Enter your email address" />
          <button className="btn">Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our Privacy Policy
        </div>
        <div className="social-icons">
          <FaFacebookF size={14} />
          <FaTwitter size={14} />
          <FaInstagram size={14} />
          <FaLinkedinIn size={14} />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
