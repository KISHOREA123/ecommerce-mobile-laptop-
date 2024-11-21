import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mobile.css";

const Mobiles = () => {
  const navigate = useNavigate();

  const products = [
    // Product data remains the same
    {
      id: 1,
      name: "Samsung Galaxy S23 FE 5G",
      image: "/images/product1.png", // Use the image from the public folder
      price: "₹65,999",
      specs: [
        "8 GB RAM | 256 GB ROM",
        "50MP + 12MP Rear Camera | 10MP Front Camera",
        "4700 mAh Battery",
        "Exynos 2400e Processor",
      ],
    },
    {
      id: 2,
      name: "Redmi 13C",
      image: "/images/product2.png",
      price: "₹7,199",
      specs: [
        "4 GB RAM | 128 GB ROM",
        "50MP Rear Camera | 8MP Front Camera",
        "5000 mAh Battery",
        "Helio G85 Processor",
      ],
    },
    {
      id: 3,
      name: "Poco M6 5G",
      image: "/images/product3.png",
      price: "₹7,999",
      specs: [
        "4 GB RAM | 64 GB ROM",
        "50MP Rear Camera | 5MP Front Camera",
        "5000 mAh Battery",
        "Mediatek Dimensity 6100+ Processor",
      ],
    },
    {
      id: 4,
      name: "Galaxy Z Fold4",
      image: "/images/product4.png",
      price: "₹88,970",
      specs: [
        "12 GB RAM | 256 GB ROM",
        "50MP +10MP + 12MP Rear Camera | 4MP + 10MP Front Camera",
        "4400 mAh Battery",
        "Snapdragon 8+ Gen 1 (4 nm)",
      ],
    },
    {
      id: 5,
      name: "Samsung A14 5g",
      image: "/images/product5.png",
      price: "₹10,999",
      specs: [
        "6 GB RAM | 128 GB ROM",
        "50MP + 2MP + 2MP Rear Camera | 13MP Front Camera",
        "5000 mAh Battery",
        "Exynos 1330 Processor",
      ],
    },
    {
      id: 6,
      name: "OnePlus Nord CE 3 Lite 5G",
      image: "/images/product6.png",
      price: "₹15,599",
      specs: [
        "8 GB RAM | 128 GB ROM",
        "108MP +2MP + 2MP Rear Camera | 16 MP Front Camera",
        "5000 mAh Battery",
        "Snapdragon 695 5G (6 nm)",
      ],
    },
    {
      id: 7,
      name: "Vivo T3 5G",
      image: "/images/product7.png",
      price: "₹15,999",
      specs: [
        "6 GB RAM | 128 GB ROM",
        "50MP + 2MP Rear Camera | 8MP Front Camera",
        "6000 mAh Battery",
        "6 Gen 1 Processor",
      ],
    },
    {
      id: 8,
      name: "Nothing Phone (2a) Plus",
      image: "/images/product8.png",
      price: "₹25,999",
      specs: [
        "12 GB RAM | 256 GB ROM",
        "50MP + 50MP Rear Camera | 50MP Front Camera",
        "5000 mAh Battery",
        "Dimensity 7350 Pro 5G Processor",
      ],
    },
    {
      id: 9,
      name: "OnePlus Nord CE4 Lite",
      image: "/images/product9.png",
      price: "₹17,899",
      specs: [
        "8GB RAM | 128 GB ROM",
        "50MP + 2MP Rear Camera | 16MP Front Camera",
        "5500 mAh Battery",
        "Snapdragon 695 5G (6 nm)",
      ],
    },
    {
      id: 10,
      name: "IQOO Z9s 5G",
      image: "/images/product10.png",
      price: "₹23,999",
      specs: [
        "8 GB RAM | 128 GB ROM",
        "50MP + 2MP Rear Camera | 16 MP Front Camera",
        "5500 mAh Battery",
        "Dimensity 7300 (4 nm)",
      ],
    },
    {
      id: 11,
      name: "Galaxy S23 Ultra 5G",
      image: "/images/product11.png",
      price: "₹79,899",
      specs: [
        "12 GB RAM | 256 GB ROM",
        "200 MP + 10MP + 10MP + 12MP Rear Camera | 12 MP Front Camera",
        "5000 mAh Battery",
        "Snapdragon 8 Gen 2 (4 nm)",
      ],
    },
    {
      id: 12,
      name: "Realme 12X 5G",
      image: "/images/product12.png",
      price: "₹12,599",
      specs: [
        "6 GB RAM | 128 GB ROM",
        "50MP + 2MP Rear Camera | 8 MP Front Camera",
        "5000 mAh Battery",
        "Mediatek Dimensity 6100+ (6 nm)",
      ],
    },
    // ...Other products
  ];

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (product) => {
    // You can store the product in the cart using state or context
    // For simplicity, we'll navigate to the cart page directly
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <section className="products-page">
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>
      <section className="products">
        <h1>Latest Mobiles</h1>
        <div className="product-grid">
          {products.map((product) => (
            <div
              className="product-container"
              key={product.id}
              onClick={() => handleProductClick(product.id)} // Navigate to details page
            >
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              <div className="product-details">
                <div className="product-title-price">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
                <ul className="spec-list">
                  {product.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Mobiles;