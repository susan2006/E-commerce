// src/pages/Living.jsx
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./living.css";
import living1 from "../assets/images/living1.jpg";
import living2 from "../assets/images/living2.jpg";
import living3 from "../assets/images/living3.jpg";
import living4 from "../assets/images/living4.jpg";
import living5 from "../assets/images/living5.jpg";
import coffee1 from "../assets/images/coffeetable1.jpg";
import coffee2 from "../assets/images/coffeetable2.jpg";
import coffee3 from "../assets/images/coffeetable3.jpg";
import ProductGrid from "../components/productgrid";

const sofaProducts = [
  {
    name: "Round Coffee Table",
    image: living1
  },
  {
    name: "Curved Sectional Sofa",
    image: living2
  },
  {
    name: "Minimalist Gray Sofa",
    image: living3
  },
  {
    name: "Cloud Sofa in Minimalist Room",
    image: living4
  },
  {
    name: "Wood Frame Sofa",
    image: living5
  }
];

const coffeeProducts = [
  {
    name: "Round White Coffee Bed",
    image: coffee1
  },
  {
    name: "Leaf Coffee Table with Drawer",
    image: coffee2
  },
  {
    name: "Velvet Ottoman coffee Table",
    image: coffee3
  }
]

const Living = () => {
  return (
    <>
      <Navbar />
      <ProductGrid title="Sofa Collection" products={sofaProducts} />
      <ProductGrid title="Coffee Table Collection" products={coffeeProducts} />
      <Footer />
    </>
  );
};

export default Living;
