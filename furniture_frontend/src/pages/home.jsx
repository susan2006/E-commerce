import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation"; // ✅ Add this line
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProductGrid from "../components/productgrid";
import living1 from "../assets/images/living1.jpg";
import living2 from "../assets/images/living2.jpg";
import living3 from "../assets/images/living3.jpg";
import kit1 from "../assets/images/kit1.jpg";
import kit2 from "../assets/images/kit2.jpg";
import kit3 from "../assets/images/kit3.jpg";
import bed1 from "../assets/images/bed1.jpg";
import bed2 from "../assets/images/bed2.jpg";
import "../assets/styles.css";

const allProducts = [
  { name: "Round Coffee Table", image: living1 },
  { name: "Curved Sectional Sofa", image: living2 },
  { name: "Minimalist Gray Sofa", image: living3 },
  { name: "Modern Pink Kitchen", image: kit1 },
  { name: "Teal L-Shaped Kitchen", image: kit2 },
  { name: "Wall Display Shelf", image: kit3 },
  { name: "Arched Headboard Bed", image: bed1 },
  { name: "Wooden Storage Bed", image: bed2 },
];

const Home = () => {
  useScrollAnimation(); // ✅ Activate scroll observer

  return (
    <>
      <Navbar />
      <section id="home" className="text-center mt-5" data-animate="left">
        <h1 data-animate="left">Furnitures only for you</h1>
        <p data-animate="right">Furniture's are the one's that make your home stand out</p>
        <div className="input-group m-4 justify-content-center" data-animate="left">
          <input type="text" className="form-control w-25" placeholder="Email Address" />
          <button className="btn signin">Get Started</button>
        </div>
      </section>

      <ProductGrid title="OUR PRODUCTS" products={allProducts} />
      <Footer />
    </>
  );
};

export default Home;
