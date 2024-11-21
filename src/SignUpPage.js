import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import './SignUpPage.css';

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the sign-up form submission here
    console.log("Signing up with", { username, email, password });

    // Store user login status (for demo purposes)
    localStorage.setItem("isLoggedIn", "true");

    // Debugging: Log to see if the login status is set
    console.log("User signed up. Login status:", localStorage.getItem("isLoggedIn"));

    // After successful sign-up, redirect to the Hero page or home page
    navigate("/"); // Redirects to the home page
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="textbox">
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
          <button type="submit" className="btn2">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
