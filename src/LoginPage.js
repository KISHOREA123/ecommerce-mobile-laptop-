import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the login form submission here
    console.log("Logging in with", { email, password });

    // Store user login status (for demo purposes)
    localStorage.setItem("isLoggedIn", "true");

    // Debugging: Log to see if the login status is set
    console.log("User logged in. Login status:", localStorage.getItem("isLoggedIn"));

    // Redirect to the home page after successful login
    navigate("/"); // Redirects to the Hero page or home page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="textbox">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn1">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
