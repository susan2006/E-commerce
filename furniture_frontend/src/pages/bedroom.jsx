// src/pages/Bedroom.jsx
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import bed1 from "../assets/images/bed1.jpg";
import bed2 from "../assets/images/bed2.jpg";
import night1 from "../assets/images/nightlamp1.jpg";
import night2 from "../assets/images/nightlamp2.jpg";
import night3 from "../assets/images/nightlamp3.jpg";
import ProductGrid from "../components/productgrid";

const bedProducts = [
  {
    name: "Arched Headboard Bed",
    image: bed1
  },
  {
    name: "Wooden Storage Bed",
    image: bed2
  },
];

const nightlampProducts = [
  {
    name: "Book Holder Lamp",
    image: night1
  },
  {
    name: "Fox Night Lamp",
    image: night2
  },
  {
    name: "Sculpted Glow Lamp",
    image: night3
  }
]

const Bedroom = () => {
  return (
    <>
      <Navbar />
      <ProductGrid title="Bedroom Collection" products={bedProducts} />
      <Footer />
    </>
  );
};

export default Bedroom;
