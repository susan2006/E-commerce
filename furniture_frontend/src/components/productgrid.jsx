import React from "react";
import { useNavigate } from "react-router-dom"; // ✨ Add this

const ProductGrid = ({ title, products }) => {
  const navigate = useNavigate(); // ✨ Hook to navigate

  const handleAddToCart = (product) => {
    const user = JSON.parse(localStorage.getItem("loginData"));
  
    if (!user) {
      // Not logged in — redirect to login with redirect info
      alert("Please login first to add items to cart.");
      navigate("/login", { state: { from: "/cart" } });
      return;
    }
  
    // Save item and go to cart
    localStorage.setItem("cartItem", JSON.stringify(product));
    navigate("/cart");
  };
  

  return (
    <section id="product">
      <div className="container">
        <h1 className="text-center my-5" id="our-products-heading">{title}</h1>
        <div className="row justify-content-center">
          {products.map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
              <div className="product-card" data-aos="fade-up">
                <img src={product.image} className="product-image" alt={product.name} />
                <div className="product-info text-center">
                  <h5>{product.name}</h5>
                  <button className="btn signin" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
