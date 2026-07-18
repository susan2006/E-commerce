import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../assets/styles.css';

const ReturnRefund = () => {
  return (
    <>
      <Navbar />
      <section id="return">
        <div className="container-fluid">
          <h1 className="text-center">Return & Refund Policy</h1>
          <p>We want you to love your purchase! If you are not satisfied, here's what you need to know:</p>

          <h2>Returns</h2>
          <ul>
            <li>Items must be returned within 14 days.</li>
            <li>Items must be unused and in original packaging.</li>
            <li>Customer is responsible for return shipping costs.</li>
          </ul>

          <h2>Refunds</h2>
          <ul>
            <li>Refunds are processed within 7 business days.</li>
            <li>Original payment method will be refunded.</li>
            <li>Shipping fees are non-refundable.</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ReturnRefund;
