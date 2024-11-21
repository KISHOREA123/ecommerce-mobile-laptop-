import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";  
import Electronics from "./Laptops";
import Mobiles from "./Mobiles"; 
import Cart from "./Carts";
import ProductDetails from "./ProductDetails";
import LoginPage from "./LoginPage"; // Assuming you have a LoginPage component
import SignUpPage from "./SignUpPage";
import LaptopDetails from "./LaptopDetails";
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((item) => item.id === product.id);

    if (existingItemIndex >= 0) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  return (
    <Router>
      <div className="app">
        <Header cart={cart} /> {/* Pass cart to Header for displaying cart count */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/laptops" element={<Electronics />} />
          <Route path="/laptop-details/:id" element={<LaptopDetails addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/carts" element={<Cart cart={cart} updateCart={setCart} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
