import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/returnrefund">Return & Refund Policy</Link>
        </div>
        <hr />
        <p>&copy; Copyright Furnify Limited</p>
      </div>
    </footer>
  );
};

export default Footer;
