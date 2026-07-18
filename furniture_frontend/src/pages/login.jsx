import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/styles.css";
import "../assets/formstyle.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginCount, setLoginCount] = useState(localStorage.getItem("loginCount") || 0);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        navigate(from);
      }, 2000);
    }
  }, [success, navigate, from]);

  const isValidEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const isValidUsername = (uname) =>
    /^[a-zA-Z0-9_]{3,}$/.test(uname);

  const validateInputs = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username or Email is required";
    } else if (!isValidEmail(username) && !isValidUsername(username)) {
      newErrors.username = "Enter a valid email or username (at least 3 characters)";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
  
    if (!validateInputs()) return;
  
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
  
    // Match by either username or email
    const foundUser = allUsers.find(
      (user) =>
        (user.username === username.trim() || user.email === username.trim())
    );
  
    if (!foundUser) {
      setErrors({ username: "User not found" });
    } else if (foundUser.password !== password) {
      setErrors({ password: "Incorrect password" });
    } else {
      // Successful login
      setSuccess(true);
      localStorage.setItem("loginData", JSON.stringify(foundUser));
  
      // Increment login count
      const currentCount = localStorage.getItem("loginCount");
      const newCount = currentCount ? parseInt(currentCount) + 1 : 1;
      localStorage.setItem("loginCount", newCount);
  
      console.log("Login successful:", foundUser);
    }
  };
    
  return (
    <div className="container">
      <form id="form" onSubmit={handleSubmit}>
        <h1>Furnify Login</h1>

        {/* ✅ Display Login Count */}
        <p style={{ color: "green" }}>Total Logins: {loginCount}</p>

        {success && <p className="success-message">Login successful! Redirecting...</p>}

        <div className={`input-control ${errors.username ? "error" : "success"}`}>
          <label htmlFor="username">Username or Email</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="error">{errors.username}</div>
        </div>

        <div className={`input-control ${errors.password ? "error" : "success"}`}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error">{errors.password}</div>
        </div>

        <button type="submit">Login</button>
        <p className="form-link">
  Don't have an account? <span onClick={() => navigate("/signup")} style={{ color: "#a52a2a", cursor: "pointer" }}>Sign up here</span>.
</p>
      </form>
    </div>
  );
};

export default Login;
