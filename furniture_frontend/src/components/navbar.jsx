import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loginData"));

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
      <div className="container-fluid stick">
        <Link className="navbar-brand" to="/">FURNIFY</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/living">Living</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kitchen">Kitchen</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bedroom">Bedroom</Link>
            </li>
          </ul>

          {/* Conditional Buttons */}
          {!user ? (
            <>
              <Link to="/signup" className="btn p-2 my-lg-0 my-2 signin">Sign Up</Link>
              <Link to="/login" className="btn p-2 my-lg-0 my-2 signin">Login</Link>
            </>
          ) : (
            <>
              <span className="nav-link text-white me-3">
                Welcome, <strong>{user.username || user.email}</strong>
              </span>
              <button onClick={handleLogout} className="btn p-2 my-lg-0 my-2 signin">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
