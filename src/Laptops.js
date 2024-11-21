import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Laptop.css";

const Laptops = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Lenovo IdeaPad Slim 3",
      image: "/images/Laptop1.webp",
      price: "₹53,920",
      specs: [
        "16 GB RAM | 512 GB ROM",
        "12th gen Intel Core i5-12450H 14",
      ],
    },
    {
      id: 2,
      name: "Acer Aspire Lite",
      image: "/images/Laptop2.webp",
      price: "₹7,199",
      specs: [
        "16 GB RAM | 512 GB ROM",
        "AMD Ryzen 5-5625U",
      ],
    },
    {
      id: 3,
      name: "Dell G15-5530",
      image: "/images/Laptop3.webp",
      price: "₹77,999",
      specs: [
        "16 GB RAM | 512 GB ROM",
        "Core i5-13450HX",
      ],
    },
    {
      id: 4,
      name: "Lenovo IdeaPad Pro 5",
      image: "/images/Laptop4.webp",
      price: "₹1,06,990",
      specs: [
        "32 GB RAM | 1 TB ROM",
        "Intel Evo Core Ultra 9 185H",
      ],
    },
    {
      id: 5,
      name: "HP 15s",
      image: "/images/Laptop5.webp",
      price: "₹52,990",
      specs: [
        "16 GB RAM | 512 GB ROM",
        "Core i5 12th Gen",
      ],
    },
    {
      id: 6,
      name: "Lenovo IdeaPad Gaming 3",
      image: "/images/Laptop6.webp",
      price: "₹49,999",
      specs: [
        "8 GB RAM | 512 GB ROM",
        "AMD Ryzen 5 5500H",
      ],
    },
    {
      id: 7,
      name: "Apple 2024 MacBook Pro",
      image: "/images/Laptop7.webp",
      price: "₹3,15,999",
      specs: [
        "36 GB RAM | 1 TB ROM",
        "Apple M1 chip",
      ],
    },
    {
      id: 8,
      name: "ASUS Vivobook 14",
      image: "/images/Laptop8.webp",
      price: "₹35,999",
      specs: [
        "8 GB RAM | 512 GB ROM",
        "Core i3-1215U",
      ],
    },
    {
      id: 9,
      name: "ASUS TUF Gaming A15",
      image: "/images/Laptop9.webp",
      price: "₹99,599",
      specs: [
        "16 GB RAM | 512 GB ROM",
        "AMD Ryzen 7 7435HS",
      ],
    },
    {
      id: 10,
      name: "HP Victus Gaming Laptop",
      image: "/images/Laptop10.webp",
      price: "₹65,990",
      specs: [
        "16 GB RAM | 512 GB ROM",
        "Intel Core i5-12450H",
      ],
    },
    {
      id: 11,
      name: "Lenovo LOQ 2024",
      image: "/images/Laptop11.webp",
      price: "₹76,690",
      specs: [
        "24 GB RAM | 512 GB ROM",
        "Intel Core i5-12450HX",
      ],
    },
    {
      id: 12,
      name: "Dell XPS 9730",
      image: "/images/Laptop12.webp",
      price: "₹3,04,052",
      specs: [
        "32 GB RAM | 1 TB ROM",
        "Intel Core i7-13700H",
      ],
    },
  ];

  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);

    // Filter suggestions based on input
    if (value) {
      const filteredSuggestions = products.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchInput(name);
    setSuggestions([]);
  };

  const handleProductClick = (id) => {
    navigate(`/laptop-details/${id}`);
  };

  return (
    <section className="laptop-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchInput}
          onChange={handleSearchChange}
        />
        <button>Search</button>
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((product) => (
              <li
                key={product.id}
                onClick={() => handleSuggestionClick(product.name)}
              >
                {product.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <section className="laptop">
        <h1>Latest Laptops</h1>
        <div className="laptop-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="laptop-container"
              onClick={() => handleProductClick(product.id)} // Navigate on click
            >
              <img
                src={product.image}
                alt={product.name}
                className="laptop-image"
              />
              <div className="laptop-details">
                <div className="laptop-title-price">
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

export default Laptops;