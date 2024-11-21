import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const products = [
    { id: 1, name: "Samsung Galaxy S23 FE", image: "/images/product1.png" },
    { id: 2, name: "Redmi 13C 5G", image: "/images/product2.png" },
    { id: 3, name: "Poco M6 5G", image: "/images/product3.png" },
    { id: 4, name: "Galaxy Z Fold4 5G", image: "/images/product4.png" },
    { id: 5, name: "Galaxy A14 5G", image: "/images/product5.png" },
  ];

  // Function to handle the navigation when a product is clicked
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="hero">
      <div className="catagories">
        <p onClick={() => navigate("/mobiles")}>Mobiles</p>
        <p onClick={() => navigate("/laptops")}>Laptops</p>
      </div>
      <div className="hero-overlay">
        <h1 className="hero-title animated-text">Today's Best Deals!!</h1>
        <p className="hero-subtitle animated-text">Discover amazing products at unbeatable prices</p>
        <div className="product-carousel1">
          {products.map((product) => (
            <div key={product.id} className="product-container">
              <div className="badge">Special Offer</div>
              <div onClick={() => handleProductClick(product.id)}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image hover-zoom" 
                />
              </div>
              <div className="product-info">
                <h2>{product.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
