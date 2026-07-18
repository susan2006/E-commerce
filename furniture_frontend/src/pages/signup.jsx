import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/styles.css";
import "../assets/formstyle.css";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [success, setSuccess] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});
  const [signupCount, setSignupCount] = useState(localStorage.getItem("signupCount") || 0);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        navigate(from);
      }, 2000);
    }
  }, [success, navigate, from]);

  const validate = () => {
    const newErrors = {};
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fname.trim()) newErrors.fname = "First name is required";
    if (!lname.trim()) newErrors.lname = "Last name is required";

    if (!username.trim()) {
      newErrors.username = "Username is required";
    } else if (!usernameRegex.test(username)) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!password2) {
      newErrors.password2 = "Please confirm your password";
    } else if (password !== password2) {
      newErrors.password2 = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const existingUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

      const isDuplicate = existingUsers.some(
        (user) => user.username === username || user.email === email
      );

      if (isDuplicate) {
        setErrors({ email: "Email or Username already exists" });
        return;
      }

      const userData = {
        fname,
        lname,
        username,
        email,
        password, // ⚠️ Don't store plain text passwords in production
      };

      existingUsers.push(userData);
      localStorage.setItem("allUsers", JSON.stringify(existingUsers));

      const currentCount = localStorage.getItem("signupCount");
      const newCount = currentCount ? parseInt(currentCount) + 1 : 1;
      localStorage.setItem("signupCount", newCount);
      setSignupCount(newCount);

      console.log("Signup successful:", userData);
      setSuccess(true);
    }
  };

  return (
    <div className="container">
      <form id="form" onSubmit={handleSubmit}>
        <h1>Furnify Registration</h1>

        <p style={{ color: "green" }}>Total Signups: {signupCount}</p>

        {success && <p className="success-message">Signup successful! Redirecting...</p>}

        <div className={`input-control ${errors.fname ? "error" : "success"}`}>
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            name="fname"
            type="text"
            placeholder="Enter your first name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <div className="error">{errors.fname}</div>
        </div>

        <div className={`input-control ${errors.lname ? "error" : "success"}`}>
          <label htmlFor="lname">Last Name</label>
          <input
            id="lname"
            name="lname"
            type="text"
            placeholder="Enter your last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <div className="error">{errors.lname}</div>
        </div>

        <div className={`input-control ${errors.username ? "error" : "success"}`}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="error">{errors.username}</div>
        </div>

        <div className={`input-control ${errors.email ? "error" : "success"}`}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="error">{errors.email}</div>
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

        <div className={`input-control ${errors.password2 ? "error" : "success"}`}>
          <label htmlFor="password2">Confirm Password</label>
          <input
            id="password2"
            name="password2"
            type="password"
            placeholder="Re-enter your password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <div className="error">{errors.password2}</div>
        </div>

        <button type="submit">Sign Up</button>
        
<p className="form-link">
  Already have an account? <span onClick={() => navigate("/login")} style={{ color: "#a52a2a", cursor: "pointer" }}>Login here</span>.
</p>
      </form>
    </div>
  );
};

export default Signup;
