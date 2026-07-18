import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../assets/styles.css';

const FAQ = () => {
  return (
    <>
      <Navbar />
      <section id="faq">
        <div className="container-fluid">
          <h1 className="text-center">Frequently Asked Questions</h1>

          <h2>1. Do you offer free shipping?</h2>
          <p>Yes, we offer free shipping on orders above $100.</p>

          <h2>2. What is your return policy?</h2>
          <p>You can return items within 14 days of purchase.</p>

          <h2>3. Do you provide furniture assembly services?</h2>
          <p>Yes, we offer professional assembly services at an additional charge.</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
