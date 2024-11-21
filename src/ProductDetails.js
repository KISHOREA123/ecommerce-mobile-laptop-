import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetails.css";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams(); 

  const navigate = useNavigate();

  const [selectedStorage, setSelectedStorage] = useState("");

  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S23 FE 5G (Light Green, 256 GB) (8 GB RAM)",
      image: "/images/product1.png",
      price: "₹65,999",
      specs: [
        "8 GB RAM | 256 GB ROM",
        "50MP + 12MP Rear Camera | 10MP Front Camera",
        "4700 mAh Battery",
        "Exynos 2400e Processor",
      ],
      offers: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI (6 and 9 months tenure)",
        "Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI (12 months tenure)",
        "Special Price: Get extra ₹4130 off (inclusive of cashback/coupon)",
      ],
      warranty: "1 Year on Handset and 6 Months on Accessories",
      delivery: "Delivery by 23 Nov, Saturday | Free ₹40",
    },
    {
      id: 2,
      name: "Redmi 13C 5G (Blue, 128 GB) (4 GB RAM)",
      image: "/images/product2.png",
      price: "₹7,199",
      specs: [
        "4 GB RAM | 128 GB ROM",
        "50MP Rear Camera | 8MP Front Camera",
        "5000 mAh Battery",
        "Helio G85 Processor",
      ],
      offers: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI (6 and 9 months tenure)",
        "Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI (12 months tenure)",
        "Special Price: Get extra ₹4130 off (inclusive of cashback/coupon)",
      ],
      warranty: "1 Year on Handset and 6 Months on Accessories",
      delivery: "Delivery by 23 Nov, Saturday | Free ₹40",
    },
    {
      id: 3,
      name: "Poco M6 5G (Black, 64 GB) (4 GB RAM)",
      image: "/images/product3.png",
      price: "₹7,999",
      specs: [
        "4 GB RAM | 64 GB ROM",
        "50MP Rear Camera | 5MP Front Camera",
        "5000 mAh Battery",
        "Mediatek Dimensity 6100+ Processor",
      ],
      offers: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI (6 and 9 months tenure)",
        "Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI (12 months tenure)",
        "Special Price: Get extra ₹4130 off (inclusive of cashback/coupon)",
      ],
      warranty: "1 Year on Handset and 6 Months on Accessories",
      delivery: "Delivery by 23 Nov, Saturday | Free ₹40",
    },
    {
      id: 4,
      name: "Galaxy Z Fold4 5G (sandal, 256 GB) (12 GB RAM)",
      image: "/images/product4.png",
      price: "₹88,970",
      specs: [
        "12 GB RAM | 256 GB ROM",
        "50MP +10MP + 12MP Rear Camera | 4MP + 10MP Front Camera",
        "4400 mAh Battery",
        "Snapdragon 8+ Gen 1 (4 nm)",
      ],
      offers: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI (6 and 9 months tenure)",
        "Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI (12 months tenure)",
        "Special Price: Get extra ₹4130 off (inclusive of cashback/coupon)",
      ],
      warranty: "1 Year on Handset and 6 Months on Accessories",
      delivery: "Delivery by 23 Nov, Saturday | Free ₹40",
    },
    {
      id: 5,
      name: "Samsung A14 5G (Maroon, 128 GB) (6 GB RAM)",
      image: "/images/product5.png",
      price: "₹10,999",
      specs: [
        "6 GB RAM | 128 GB ROM",
        "50MP + 2MP + 2MP Rear Camera | 13MP Front Camera",
        "5000 mAh Battery",
        "Exynos 1330 Processor",
      ],
      offers: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI (6 and 9 months tenure)",
        "Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI (12 months tenure)",
        "Special Price: Get extra ₹4130 off (inclusive of cashback/coupon)",
      ],
      warranty: "1 Year on Handset and 6 Months on Accessories",
      delivery: "Delivery by 23 Nov, Saturday | Free ₹40",
    },
    {
      id: 6,
      name: "OnePlus Nord CE 3 Lite 5G (Black, 128 GB) (8 GB RAM)",
      image: "/images/product6.png",
      price: "₹15,599",
      specs: [
        "8 GB RAM | 128 GB ROM",
        "108MP +2MP + 2MP Rear Camera | 16 MP Front Camera",
        "5000 mAh Battery",
        "Snapdragon 695 5G (6 nm)",
      ],
      offers: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI (6 and 9 months tenure)",
        "Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI (12 months tenure)",
        "Special Price: Get extra ₹4130 off (inclusive of cashback/coupon)",
      ],
      warranty: "1 Year on Handset and 6 Months on Accessories",
      delivery: "Delivery by 23 Nov, Saturday | Free ₹40",
    },
    {
      id: 7,
      name: "Vivo T3 5G (Black, 128 GB) (6 RAM)",
      image: "/images/product7.png",
      price: "₹15,999",
      specs: [
        "6 GB RAM | 128 GB ROM",
        "50MP + 2MP Rear Camera | 8MP Front Camera",
        "6000 mAh Battery",
        "6 Gen 1 Processor",
      ],
      offers: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI (6 and 9 months tenure)",
        "Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI (12 months tenure)",
        "Special Price: Get extra ₹4130 off (inclusive of cashback/coupon)",
      ],
      warranty: "1 Year on Handset and 6 Months on Accessories",
      delivery: "Delivery by 23 Nov, Saturday | Free ₹40",
    },
    {
      id: 8,
      name: "Nothing Phone (2a) Plus 5G (Navy Blue, 256 GB) (12 GB RAM)",
      image: "/images/product8.png",
      price: "₹25,999",
      specs: [
        "12 GB RAM | 256 GB ROM",
        "50MP + 50MP Rear Camera | 50MP Front Camera",
        "5000 mAh Battery",
        "Dimensity 7350 Pro 5G Processor",
      ],
      offers: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI (6 and 9 months tenure)",
        "Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI (12 months tenure)",
        "Special Price: Get extra ₹4130 off (inclusive of cashback/coupon)",
      ],
      warranty: "1 Year on Handset and 6 Months on Accessories",
      delivery: "Delivery by 23 Nov, Saturday | Free ₹40",
    },
    {
      id: 9,
      name: "OnePlus Nord CE4 Lite 5G (Blue, 128 GB) (8 GB RAM)",
      image: "/images/product9.png",
      price: "₹17,899",
      specs: [
        "8GB RAM | 128 GB ROM",
        "50MP + 2MP Rear Camera | 16MP Front Camera",
        "5500 mAh Battery",
        "Snapdragon 695 5G (6 nm)",
      ],
      offers: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI (6 and 9 months tenure)",
        "Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI (12 months tenure)",
        "Special Price: Get extra ₹4130 off (inclusive of cashback/coupon)",
      ],
      warranty: "1 Year on Handset and 6 Months on Accessories",
      delivery: "Delivery by 23 Nov, Saturday | Free ₹40",
    },
    {
      id: 10,
      name: "IQOO Z9s Pro 5G (Luxe Marble, 128 GB)  (8 GB RAM)",
      image: "/images/product10.png",
      price: "₹23,999",
      specs: [
        "8 GB RAM | 128 GB ROM",
        "50MP + 2MP Rear Camera | 16 MP Front Camera",
        "5500 mAh Battery",
        "Dimensity 7300 (4 nm)",
      ],
      offers: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI (6 and 9 months tenure)",
        "Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI (12 months tenure)",
        "Special Price: Get extra ₹4130 off (inclusive of cashback/coupon)",
      ],
      warranty: "1 Year on Handset and 6 Months on Accessories",
      delivery: "Delivery by 23 Nov, Saturday | Free ₹40",
    },
    {
      id: 11,
      name: "SAMSUNG Galaxy S23 Ultra 5G (Green, 256 GB)  (12 GB RAM)",
      image: "/images/product11.png",
      price: "₹79,899",
      specs: [
        "12 GB RAM | 256 GB ROM",
        "200 MP + 10MP + 10MP + 12MP Rear Camera | 12 MP Front Camera",
        "5000 mAh Battery",
        "Snapdragon 8 Gen 2 (4 nm)",
      ],
      offers: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI (6 and 9 months tenure)",
        "Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI (12 months tenure)",
        "Special Price: Get extra ₹4130 off (inclusive of cashback/coupon)",
      ],
      warranty: "1 Year on Handset and 6 Months on Accessories",
      delivery: "Delivery by 23 Nov, Saturday | Free ₹40",
    },
    {
      id: 12,
      name: "Realme 12X 5G (voilet, 128 GB) (6 GB RAM)",
      image: "/images/product12.png",
      price: "₹12,599",
      specs: [
        "6 GB RAM | 128 GB ROM",
        "50MP + 2MP Rear Camera | 8 MP Front Camera",
        "5000 mAh Battery",
        "Mediatek Dimensity 6100+ (6 nm)",
      ],
      offers: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI (6 and 9 months tenure)",
        "Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI (12 months tenure)",
        "Special Price: Get extra ₹4130 off (inclusive of cashback/coupon)",
      ],
      warranty: "1 Year on Handset and 6 Months on Accessories",
      delivery: "Delivery by 23 Nov, Saturday | Free ₹40",
    },
    // Add other product details as required
  ];

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  // Handle Storage Selection
  const handleStorageSelect = (storage) => {
    setSelectedStorage(storage);
  };

  // Handle Add to Cart button click
  const handleAddToCart = () => {
    addToCart(product); // Add the selected product to the cart
    navigate("/carts"); // Navigate to the cart page
  };

  return (
    <div className="product-details-container">
      <div className="product-image-section">
        <img
          src={product.image}
          alt={product.name}
          className="product-images"
        />
        <div className="action-buttons">
          <button className="add-to-cart" onClick={handleAddToCart}>
            <FontAwesomeIcon
              icon={faCartPlus}
              style={{ marginRight: "10px" }}
            />
            Add to Cart
          </button>
          <button className="buy-now">
            <FontAwesomeIcon
              icon={faCreditCard}
              style={{ marginRight: "10px" }}
            />
            Buy Now
          </button>
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="product-details-section">
        <h1 className="product-title">{product.name}</h1>
        <div className="price-section">
          <p className="original-price">{product.price}</p>
        </div>
        <div className="tab-content">
          <h3>Storage</h3>
          <div className="storage-buttons">
            {["64 GB", "128 GB", "256 GB", "512 GB", "1 TB"].map((storage) => (
              <button
                key={storage}
                className={`storage-button ${selectedStorage === storage ? "selected" : ""}`}
                onClick={() => handleStorageSelect(storage)}
              >
                <h3>{storage}</h3>
              </button>
            ))}
          </div>

          <h3>Specifications</h3>
          <ul className="specs-list">
            {product.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          <h3>Available Offers</h3>
          <ul className="offers-list">
            {product.offers.map((offer, index) => (
              <li key={index}>{offer}</li>
            ))}
          </ul>
          <h3>Warranty</h3>
          <ul>
            <p className="warranty">{product.warranty}</p>
          </ul>
          <h3>Delivery</h3>
          <ul>
            <p className="delivery">{product.delivery}</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;