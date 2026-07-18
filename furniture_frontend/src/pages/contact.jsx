import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import contactImg from '../assets/images/contact_us.jpg';
import '../assets/styles.css';

const Contact = () => {
  return (
    <>
      <Navbar />
      <section id="contact">
        <div className="container box">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <img src={contactImg} className="img-fluid" alt="CONTACT US" />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h1>CONTACT US</h1>
              <form className="mb-3">
                <input type="text" className="form-control mb-2" placeholder="Enter your name" />
                <input type="email" className="form-control mb-2" placeholder="Enter your email" />
                <textarea className="form-control mb-2" placeholder="Enter your message" rows="4"></textarea>
                <button type="submit" className="btn signin">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
