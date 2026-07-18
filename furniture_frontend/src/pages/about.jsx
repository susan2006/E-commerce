import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import aboutImg from '../assets/images/about-img.jpg';
import '../assets/styles.css';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('from-left');
          } else {
            entry.target.classList.remove('from-left');
            entry.target.classList.add('from-right');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const targets = document.querySelectorAll('.scroll-animate');
    targets.forEach(target => observer.observe(target));

    return () => {
      targets.forEach(target => observer.unobserve(target));
    };
  }, []);

  return (
    <>
      <Navbar />
      <section id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 scroll-animate">
              <img src={aboutImg} className="img-fluid" alt="About Furnify" />
            </div>
            <div className="col-lg-6 col-md-6 col-12 scroll-animate">
              <h1 className="text-center">About Furnify</h1>
              <p>Furnify is dedicated to providing stylish, high-quality furniture that enhances your living spaces. Our mission is to bring comfort and elegance to homes with carefully crafted pieces.</p>

              <h2>Why Choose Furnify?</h2>
              <ul>
                <li><strong>Premium Quality:</strong> We use the finest materials for durability and aesthetics.</li>
                <li><strong>Affordable Pricing:</strong> We offer luxury furniture at competitive prices.</li>
                <li><strong>Eco-Friendly:</strong> Our products are sourced sustainably to reduce environmental impact.</li>
                <li><strong>Customization:</strong> We provide custom furniture options tailored to your preferences.</li>
                <li><strong>Fast Delivery:</strong> Quick and reliable shipping across multiple locations.</li>
              </ul>

              <h2>Our Vision</h2>
              <p>To become a global leader in furniture retail, offering sustainable and stylish solutions for modern homes.</p>

              <h2>Our Mission</h2>
              <p>Providing innovative, high-quality furniture that brings comfort, style, and functionality to every home.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
