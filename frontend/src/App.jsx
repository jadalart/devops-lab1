import React, { useState } from "react";
import "./App.css";

const productsData = [
  { id: 1, name: "Smartphone", price: 500 },
  { id: 2, name: "Laptop", price: 1200 },
  { id: 3, name: "Headphones", price: 150 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div>
      <h1>Ravi's Shop</h1>
      <div className="products">
        {productsData.map((p) => (
          <div key={p.id} className="product">
            <h3>{p.name}</h3>
            <p>Price: ${p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart ({cart.length})</h2>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

