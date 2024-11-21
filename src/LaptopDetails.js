import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import "./LaptopDetails.css";

const LaptopDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedStorage, setSelectedStorage] = useState(null);

  const laptops = [
    {
      id: 1,
      name: "Lenovo IdeaPad Slim 3 13th Gen Intel Core i7-13620H, FHD IPS 300 Nits Thin & Light Laptop (16GB/512GB SSD/Win 11/MSO 21/1Yr ADP Free/Alexa Built-in/3 mon Game Pass/Grey/1.6Kg), 83EM008GIN",
      image: "/images/Laptop1.webp",
      price: "₹53,920",
      specs: [
        "Brand: Lenovo",
        "Model Name: IdeaPad Slim",
        "Screen Size: 15 Inches",
        "SSD: 512GB SSD",
        "CPU Model: Intel Core i7-13620H",
        "RAM Memory Installed Size: 16 GB",
        "Operating System: Windows 11 Home",
        "Special Feature: HD Audio",
        "Graphics Card Description: Integrated",
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
      name: "Acer Aspire Lite 13th Gen Intel Core i3-1305U Thin and Light Premium Laptop (Windows 11 Home/8 GB RAM/512GB SSD/36 WHR) AL15-53, Full HD Display, Metal Body, Steel Gray, 1.59 KG",
      image: "/images/Laptop2.webp",
      price: "₹31,199",
      specs: [
        "Brand: Acer",
        "Model Name: Aspire Lite",
        "Screen Size: 15.6 Inches",
        "Colour: Steel Gray",
        "CPU Model: Intel Core i3-1305U",
        "RAM Memory Installed Size: 8 GB",
        "SSD: 512 GB",
        "Operating System: Windows 11 Home",
        "Special Feature: Thin",
        "Graphics Card Description: Integrated",
        "Graphics Co-processor: Intel UHD Graphics",
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
      name: "Dell {Smartchoice} G15-5530 Core i5-13450HX| NVIDIA RTX 3050, 6GB (16GB RAM|1TB SSD, (39.62cm)|Dark Shadow Grey|2.65Kg|Gaming Laptop",
      image: "/images/Laptop3.webp",
      price: "₹77,999",
      specs: [
        "Brand: Dell",
        "Model Name: Dell Laptop",
        "Screen Size: 15.6 Inches",
        "Colour: Dark Shadow Gray with Black thermal shelf",
        "Hard Disk Size: 1 TB",
        "CPU Model: Core i5-13450HX",
        "RAM Memory Installed Size: 16 GB",
        "Operating System: Windows 11 Home",
        "Special Feature: Backlit Keyboard",
        "Graphics Card Description: Dedicated",
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
      name: "Lenovo IdeaPad Pro 5 Intel Evo Core Ultra 9 185H Built-in AI, 2.8K-OLED 400Nits 120Hz Laptop (32GB/1TB SSD/Intel Arc GPU/Win11/MSO 21/FHD+IR Cam/1Yr ADP Free/Grey/1.4Kg), 83D2001GIN",
      image: "/images/Laptop4.webp",
      price: "₹1,06,990",
      specs: [
        "Brand: Lenovo",
        "Model Name: IdeaPad",
        "Screen Size: 14 Inches",
        'Colour: 14" | 2.8K OLED',
        "Hard Disk Size: 1 TB",
        "CPU Model: Intel Evo Core Ultra 9 185H",
        "RAM Memory Installed Size: 32 GB",
        "Operating System: Windows 11 Home",
        "Special Feature: HD Audio",
        "Graphics Card Description: Integrated",
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
      name: "HP 15s Core i5 12th Gen (16GB RAM/512GB SSD/FHD/MS Office 21 /Backlit Keyboard /15.6-inch (39.6 cm)/FHD/Windows 11/Silver/1.69 kg) fy5009TU/fd0111tu Laptop",
      image: "/images/Laptop5.webp",
      price: "₹52,990",
      specs: [
        "Brand: HP",
        "Model Name: HP Laptop",
        "Screen Size: 39.6 cm",
        "Colour: Silver i5 12th Gen - 16GB+512GB",
        "Hard Disk Size: 512 GB",
        "CPU Model: Core i5 12th Gen",
        "RAM Memory Installed Size: 16 GB",
        "Operating System: Windows 11 Home",
        "Special Feature: Anti Glare Screen",
        "Graphics Card Description: Integrated",
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
      name: "[Smart Choice] Lenovo IdeaPad Gaming 3 Laptop AMD Ryzen 5 5500H 15.6-inch (39.62cm) FHD IPS 300nits 144Hz (8GB/512GB SSD/Win 11/NVIDIA RTX 2050 4GB/Alexa/3 Month Game Pass/Shadow Black/2.32Kg), 82K20289IN",
      image: "/images/Laptop6.webp",
      price: "₹49,999",
      specs: [
        "Brand: Lenovo",
        "Model Name: IdeaPad Gaming 3 15ACH6",
        "Screen Size: 15.6 Inches",
        "Colour: Shadow Black",
        "Hard Disk Size: 512 GB",
        "CPU Model: AMD Ryzen 5 5500H",
        "RAM Memory Installed Size: 8 GB",
        "Operating System: Windows 11 Home",
        "Special Feature: Backlit Keyboard, Anti Glare Coating",
        "Graphics Card Description: Dedicated",
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
      name: "Apple 2024 MacBook Pro Laptop with M4 Pro chip with 14‑core CPU and 20‑core GPU: Built for Apple Intelligence, (14.2″) Liquid Retina XDR Display, 24GB Unified Memory, 1TB SSD Storage; Silver",
      image: "/images/Laptop7.webp",
      price: "₹3,15,999",
      specs: [
        "Brand: Apple",
        "Model Name: MacBook Pro",
        "Screen Size: 16 Inches",
        "Colour: Space Black",
        "CPU Model: Apple M4 chip",
        "RAM Memory Installed Size: 24 GB",
        "Operating System: Mac OS",
        "Graphics Card Description: Integrated",
        "CPU Speed: 0.01 GHz",
        "Hard Disk Description: SSD",
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
      name: "ASUS Vivobook 14 Thin and Light Laptop, Core i3-1215U 12th Gen, 14-inch (35.56 cm) FHD, 60Hz (8GB RAM/512GB SSD/Windows 11/Office 2021/Fingerprint/42WHr /Blue/1.40 kg), X1404ZA-NK321WS",
      image: "/images/Laptop8.webp",
      price: "₹35,999",
      specs: [
        "Brand: ASUS",
        "Model Name: Vivobook",
        "Screen Size: 14 Inches",
        "Colour: Blue, 14 inch",
        "Hard Disk Size: 512 GB",
        "CPU Model: Core i3-1215U",
        "RAM Memory Installed Size: 8 GB",
        "Operating System: Windows 11 Home",
        "Special Feature: Fingerprint Reader, Anti Glare Coating",
        "Graphics Card Description: Integrated",
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
      name: "ASUS TUF Gaming A15, Ryzen 7 7435HS, 15.6-inch, FHD 144Hz, Gaming Laptop (16GB RAM/512GB SSD/NVIDIA GeForce RTX 3050/Windows 11/48WHr/Graphite Black/2.3 Kg), FA506NCR-HN054W",
      image: "/images/Laptop9.webp",
      price: "₹99,599",
      specs: [
        "Brand: ASUS",
        "Model Name: TUF Gaming",
        "Screen Size: 15.6 Inches",
        "Colour: Graphite Black, R7 | RTX 2050",
        "CPU Model: AMD Ryzen 7 7435HS",
        "RAM Memory Installed Size: 16 GB",
        "Operating System: Windows 11 Home",
        "Special Feature: Built-in 3-microphone array, 720P HD camera, Adaptive-Sync, Anti-glare display, Backlit Chiclet Keyboard 1-Zone RGB",
        "Graphics Card Description: Dedicated",
        "Graphics Coprocessor: NVIDIA GeForce RTX 2050",
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
      name: "HP Victus Gaming Laptop,12th Gen Intel Core i5-12450H,4GB RTX 3050 GPU,15.6-inch(39.6 cm),FHD,IPS,16GB DDR4,512GB SSD,Backlit KB,Dual Speakers (MSO, Blue,2.37 kg),fa0666TX/fa0444tx/fa0333tx",
      image: "/images/Laptop10.webp",
      price: "₹65,990",
      specs: [
        "Brand: HP",
        "Model Name: HP Laptop",
        "Screen Size: 39.6 Centimetres",
        "Colour: Light Blue With Offer",
        "Hard Disk Size: 512 GB",
        "CPU Model: Intel Core i5-12450H",
        "RAM Memory Installed Size: 16 GB",
        "Operating System: Windows 11 Home",
        "Special Feature: FHD, Backlit Keyboard, Micro-Edge Display, Anti-Glare, Numeric Keypad",
        "Graphics Card Description: Dedicated",
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
      name: "Lenovo LOQ 2024 Intel Core i5-13450HX, 15.6-inch (39.6cm) 144Hz 300Nits FHD IPS Gaming Laptop (16GB/512GB SSD/Win 11/NVIDIA RTX 4050 6GB Graphics/MSO 21/1Yr ADP Free/3 Mon Game Pass/Grey/2.4Kg), 83DV007GIN",
      image: "/images/Laptop11.webp",
      price: "₹76,690",
      specs: [
        "Brand: Lenovo",
        "Model Name: LOQ",
        "Screen Size: 15.6 Inches",
        "Colour: Luna Grey",
        "Hard Disk Size: 512 GB",
        "CPU Model: Intel Core i5-13450HX",
        "RAM Memory Installed Size: 16 GB",
        "Operating System: Windows 11",
        "Special Feature: Anti Glare Coating",
        "Graphics Card Description: Dedicated",
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
      name: "Dell XPS 9730 Laptop, Intel Core i7-13700H Processor/32GB DDR5/1TB SSD/NVIDIA RTX 4060 8GB GDDR6/17.0-inch (43.18cm) UHD+ AR Touch 500 nits/Backlit KB + FPR/Win 11 + MSO'21 + 15 Month McAfee/Silver/2.44kg",
      image: "/images/Laptop12.webp",
      price: "₹3,04,052",
      specs: [
        "Brand: Dell",
        "Model Name: XPS 9730",
        "Screen Size: 17 Inches",
        "Colour: Platinum Silver",
        "CPU Model: Intel Core i7-13700H",
        "RAM Memory Installed Size: 32 GB",
        "Operating System: Windows 11 Home",
        "Special Feature: Fingerprint Reader, Backlit Keyboard",
        "Graphics Card Description: Dedicated",
        "CPU Speed: 5 GHz",
      ],
      offers: [
        "Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI (6 and 9 months tenure)",
        "Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI (12 months tenure)",
        "Special Price: Get extra ₹4130 off (inclusive of cashback/coupon)",
      ],
      warranty: [
        "1 Year on Handset and 6 Months on Accessories"
      ],
      delivery: [
        "Delivery by 23 Nov, Saturday | Free ₹40"
      ],
    },
    // Same product data as in Laptops.js
  ];

  const laptop = laptops.find((item) => item.id === parseInt(id));

  if (!laptop) {
    return <p>Laptop not found!</p>;
  }

  // Handle the selection of a storage option
  const handleStorageSelect = (storage) => {
    setSelectedStorage(storage);
  };

  const handleAddToCart = () => {
    addToCart(laptop); // Add the selected product to the cart
    navigate("/carts"); // Navigate to the cart page
  };

  return (
    <div className="laptop-details-container">
      {/* Left Section: Image and Action Buttons */}
      <div className="laptop-image-section">
        <img src={laptop.image} alt={laptop.name} className="laptop-images" />
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
      <div className="laptop-details-section">
        <h1 className="laptop-title">{laptop.name}</h1>
        <div className="price-section">
          <p className="original-price">{laptop.price}</p>
        </div>
        <div className="tab-content">
          <h3>SSD Capacity</h3>
          {/* Render the buttons for different storage options */}
          <button
            className={`storage-btn ${selectedStorage === "256 GB" ? "selected" : ""}`}
            onClick={() => handleStorageSelect("256 GB")}
          >
            256 GB
          </button>
          <button
            className={`storage-btn ${selectedStorage === "512 GB" ? "selected" : ""}`}
            onClick={() => handleStorageSelect("512 GB")}
          >
            512 GB
          </button>
          <button
            className={`storage-btn ${selectedStorage === "1 TB" ? "selected" : ""}`}
            onClick={() => handleStorageSelect("1 TB")}
          >
            1 TB
          </button>

          <h3>System Memory</h3>
          <button>
            <h3>8 GB</h3>
          </button>
          <button>
            <h3>16 GB</h3>
          </button>
          <button>
            <h3>32 GB</h3>
          </button>
          
          <h3>Specifications</h3>
          <ul className="specs-list">
            {laptop.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <h3>Available Offers</h3>
          <ul className="offers-list">
            {laptop.offers.map((offer, index) => (
              <li key={index}>{offer}</li>
            ))}
          </ul>
          <h3>Warranty</h3>
          <p className="warranty">{laptop.warranty}</p>
          <h3>Delivery</h3>
          <p className="delivery">{laptop.delivery}</p>
        </div>
      </div>
    </div>
  );
};

export default LaptopDetails;