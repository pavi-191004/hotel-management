// src/pages/PlaceOrder.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";

export default function PlaceOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const { dish } = location.state || {}; 

  const [quantity, setQuantity] = useState(1);

  if (!dish) {
    return (
      <div className="place-order-page">
        <Header title="Invalid Order" />
        <p>No dish selected.</p>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    alert(`Order placed: ${quantity} x ${dish.name} (₹${dish.price * quantity})`);
    navigate("/orders");
  };

  return (
    <div className="place-order-page">
      <Header title="Place Your Order" />
      <div className="order-card">
        <img src={dish.image} alt={dish.name} className="order-img" />
        <h2>{dish.name}</h2>
        <p>{dish.desc}</p>
        <p>Price: ₹{dish.price}</p>

        <div className="quantity-section">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <p className="total">Total: ₹{dish.price * quantity}</p>

        <button className="confirm-btn" onClick={handlePlaceOrder}>
          Confirm Order
        </button>

        <button className="cancel-btn" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
