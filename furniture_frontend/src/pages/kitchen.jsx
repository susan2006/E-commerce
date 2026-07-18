// src/pages/Kitchen.jsx
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import kit1 from "../assets/images/kit1.jpg";
import kit2 from "../assets/images/kit2.jpg";
import kit3 from "../assets/images/kit3.jpg";
import ProductGrid from "../components/productgrid";

const kitchenProducts = [
  {
    name: "Modern Pink Kitchen",
    image: kit1
  },
  {
    name: "Teal L-Shaped Kitchen",
    image: kit2
  },
  {
    name: "Wall Display Shelf",
    image: kit3
  },
];

const Kitchen = () => {
  return (
    <>
      <Navbar />
      <ProductGrid title="Kitchen Collection" products={kitchenProducts} />
      <Footer />
    </>
  );
};

export default Kitchen;
