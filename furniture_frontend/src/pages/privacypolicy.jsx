import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../assets/styles.css';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <section id="privacy">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>
            At Furnify, we value your privacy and are committed to protecting your personal information. This policy
            explains how we collect, use, and safeguard your data.
          </p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li>Personal information (e.g., name, email, phone number) when you register or make a purchase.</li>
            <li>Payment details for processing transactions.</li>
            <li>Website usage data through cookies and analytics tools.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To process your orders and manage your account.</li>
            <li>To improve our website and user experience.</li>
            <li>For customer service and support.</li>
            <li>To send promotional emails (with your consent).</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>
            We implement security measures to protect your personal data from unauthorized access, alteration, or
            disclosure.
          </p>

          <h2>4. Your Rights</h2>
          <p>
            You can request to access, update, or delete your personal information at any time by contacting us.
          </p>

          <h2>5. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. Please review this page for the latest version.</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
