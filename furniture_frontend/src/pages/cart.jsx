import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import '../assets/cart.css'; // Add this CSS file

const Cart = () => {
  const navigate = useNavigate();
  const cartItem = JSON.parse(localStorage.getItem('cartItem'));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loginData"));
    if (!user) {
      alert("Please login to view your cart.");
      navigate("/login", { state: { from: "/cart" } });
    }
  }, [navigate]);  

  const handleBuyNow = () => {
    alert('Order Placed Successfully!');
    localStorage.removeItem('cartItem');
    navigate('/');
  };

  if (!cartItem) {
    return (
      <>
        <Navbar />
        <div className="container text-center my-5">
          <h2>Your Cart is Empty</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h2 className="text-center mb-4">Your Cart</h2>
        <div className="cart-card">
          <img src={cartItem.image} alt={cartItem.name} className="cart-image" />
          <div className="cart-body">
            <h5 className="cart-title">{cartItem.name}</h5>
            <button className="buy-button" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
