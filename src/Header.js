import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons"; // Added faUserCircle
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Debugging: check if localStorage is set correctly
    const loginStatus = localStorage.getItem("isLoggedIn");
    console.log("Login status in Header:", loginStatus); // Debugging
    if (loginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Handle logout
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <header className="header">
      <div className="logo">MyShop</div>

      {/* Home Link with Icon */}
      <Link to="/" className="hero-link">
        <FontAwesomeIcon icon={faHome} className="icon" /> Home
      </Link>

      {/* Cart Link with Icon */}
      <Link to="/carts" className="cart-link">
        <FontAwesomeIcon icon={faShoppingCart} className="icon" /> Carts
      </Link>

      <div className="auth-buttons">
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/signup" className="signup-button">Sign Up</Link>
          </>
        ) : (
          <>
            {/* Profile Icon and Logout */}
            <Link to="/profile" className="profile-link">
              <FontAwesomeIcon icon={faUserCircle} className="icon" /> Profile
            </Link>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
