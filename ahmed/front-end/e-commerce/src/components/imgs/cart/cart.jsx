import React, { useState } from "react";
import "./App.css";

function cart() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="logo">MyShop</div>
        <div className="cart-header">
          <div className="cart-icon">
            <div className="cart-body">
              <div className="cart-handle"></div>
              <div className="cart-bottom"></div>
            </div>
            <div className="cart-wheels">
              <div className="wheel"></div>
              <div className="wheel"></div>
            </div>
            <div className="cart-counter">
              <span>{count}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Controls to update the cart */}
      <div className="controls">
        <button onClick={decrementCount} disabled={count === 0}>
          -
        </button>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default cart;
