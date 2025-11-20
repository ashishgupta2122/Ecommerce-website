import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        {/* About */}
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            lobortis tincidunt est, et euismod purus suscipit quis.
          </div>
        </div>

        {/* Contact */}
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">1234 Street Name, City, State, 12345</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">+1 234 567 890</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">support@example.com</div>
          </div>
        </div>

        {/* Categories */}
        <div className="col">
          <div className="title">Categories</div>
          <div className="text link">Men</div>
          <div className="text link">Women</div>
          <div className="text link">Kids</div>
          <div className="text link">Accessories</div>
        </div>

        {/* Pages */}
        <div className="col">
          <div className="title">Pages</div>
          <div className="text link">Home</div>
          <div className="text link">About</div>
          <div className="text link">Privacy Policy</div>
          <div className="text link">Contact</div>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            © {new Date().getFullYear()} Ecom Store. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
