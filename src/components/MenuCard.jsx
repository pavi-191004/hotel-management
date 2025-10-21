import { useNavigate } from "react-router-dom";

export default function MenuCard({ name, desc, price, image, status }) {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/place-order", {
      state: {
        dish: { name, desc, price, image, status },
      },
    });
  };

  return (
    <div className="menu-card">
      <img src={image} alt={name} className="menu-img" />

      <div className="menu-info">
        <h3>{name}</h3>
        <p className="desc">{desc}</p>

        <div className="price-status">
          <span className="price">₹{price}</span>
          <span className={`status ${status.toLowerCase()}`}>{status}</span>
        </div>

        <button
          className="order-btn"
          onClick={handleOrder}
          disabled={status !== "Active"}
        >
          {status === "Active" ? "Order Now" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}
