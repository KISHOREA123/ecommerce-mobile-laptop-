import React from "react";
import "./Carts.css";

const Cart = ({ cart, updateCart }) => {
  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, product) => sum + (Number(product.price) || 0) * product.quantity,
    0
  );

  // Tax calculation (10% example)
  const tax = totalPrice * 0.1;
  const finalPrice = totalPrice + tax;

  // Handle quantity change
  const handleQuantityChange = (index, quantity) => {
    if (quantity < 1) return;
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    updateCart(updatedCart);
  };

  // Handle removing an item
  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  return (
    <div
      className="cart-container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {/* Left Side - Cart Items */}
      <div
        className="cart-items"
        style={{
          flex: "3",
          marginRight: "20px",
          minWidth: "60%",
        }}
      >
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((product, index) => (
              <li
                key={index}
                className="cart-item"
                style={{
                  display: "flex",
                  marginBottom: "20px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "10px",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "20px",
                    borderRadius: "8px",
                  }}
                />
                <div style={{ flex: "1" }}>
                  <h3>{product.name}</h3>
                  <p>Price per unit: ₹
                    {Number(product.price || 0).toFixed(2)}
                  </p>
                  <p>
                    Total Price: ₹
                    {Number(product.price * product.quantity || 0).toFixed(2)}
                  </p>
                  <div>
                    <label htmlFor={`quantity-${index}`}>Qty:</label>
                    <input
                      type="number"
                      id={`quantity-${index}`}
                      value={product.quantity}
                      min="1"
                      style={{ marginLeft: "10px", width: "50px" }}
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value))
                      }
                    />
                  </div>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    style={{
                      marginTop: "10px",
                      color: "white",
                      backgroundColor: "red",
                      border: "none",
                      borderRadius: "4px",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right Side - Summary */}
      <div
        className="cart-summary"
        style={{
          flex: "1",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          background: "#f9f9f9",
          minWidth: "30%",
        }}
      >
        <h3>
          Subtotal ({cart.length} item{cart.length > 1 ? "s" : ""}): ₹
          {totalPrice.toFixed(2)}
        </h3>
        <p>Tax (10%): ₹{tax.toFixed(2)}</p>
        <h3>Total: ₹{finalPrice.toFixed(2)}</h3>
        <p style={{ color: "green" }}>Your order is eligible for FREE delivery.</p>
        <button
          style={{
            width: "100%",
            padding: "10px",
            background: "#ffd814",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default Cart;
