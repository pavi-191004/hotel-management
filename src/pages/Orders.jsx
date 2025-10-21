import React from "react";


const Orders = () => {
  const orders = {
    queued: [
      { id: "#T121", location: "Room 512", items: "2x Idli, 1x Filter Coffee", placed: "12:14", eta: "22m" },
      { id: "#T122", location: "Table 9", items: "1x Pongal, 1x Medu Vadai", placed: "12:16", eta: "18m" },
      { id: "#T123", location: "Room 204", items: "1x Lemon Rice, 1x Curd Rice", placed: "12:20", eta: "20m" },
    ],
    preparing: [
      { id: "#T118", location: "Table 3", items: "1x Masala Dosa, 1x Sambar Vadai", started: "12:05", eta: "10m" },
      { id: "#T119", location: "Room 410", items: "2x Veg Meals", started: "12:07", eta: "8m" },
    ],
    ready: [
      { id: "#T115", location: "Room 305", items: "1x Parotta with Kurma", ready: "12:10", type: "Pickup" },
      { id: "#T117", location: "Table 12", items: "2x Mini Tiffin", ready: "12:12", type: "Serve" },
    ],
  };

  const OrderCard = ({ order, status }) => (
    <div className="order-card">
      <h4>{order.id} • {order.location}</h4>
      <p>{order.items}</p>
      {status === "queued" && <p>Placed {order.placed} • ETA {order.eta}</p>}
      {status === "preparing" && <p>Started {order.started} • ETA {order.eta}</p>}
      {status === "ready" && <p>Ready {order.ready} • {order.type}</p>}
    </div>
  );

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h2>Active Orders</h2>
        <div className="actions">
          <button className="btn">Today</button>
          <button className="btn active">Service: All</button>
         
        </div>
      </div>

      <div className="kitchen-board">
        <div className="column">
          <h3>Queued <span>{orders.queued.length}</span></h3>
          {orders.queued.map(order => <OrderCard key={order.id} order={order} status="queued" />)}
        </div>

        <div className="column">
          <h3>Preparing <span>{orders.preparing.length}</span></h3>
          {orders.preparing.map(order => <OrderCard key={order.id} order={order} status="preparing" />)}
        </div>

        <div className="column">
          <h3>Ready <span>{orders.ready.length}</span></h3>
          {orders.ready.map(order => <OrderCard key={order.id} order={order} status="ready" />)}
        </div>
      </div>
    </div>
  );
};

export default Orders;
