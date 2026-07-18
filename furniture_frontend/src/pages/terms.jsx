// src/pages/Terms.js
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Terms = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Terms and Conditions</h1>
        <p>Please read our terms carefully...</p>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
