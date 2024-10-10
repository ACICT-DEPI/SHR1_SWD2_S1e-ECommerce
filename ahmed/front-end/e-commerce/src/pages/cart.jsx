// Cart.jsx

import React from "react";
import "./cart.css"
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCartAction,
  updateCartQuantityAction,
} from "../redux/setAction";
import PRODUCTS from "../data";
import { ProductCard } from "./productCard";
 
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch(ProductCard);

  const increaseQuantity = (id, quantity) => {
    dispatch(updateCartQuantityAction(id, quantity + 1));
  };

  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateCartQuantityAction(id, quantity - 1));
    }
  };

  const removeFromCart = (id) => {
    dispatch(removeFromCartAction(id));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, product) =>  total + product.rice * product.quantity,
      0
    );
  };

  return (
    <div className="cart">
      <h2 className="total-price">Total Cart Price: {calculateTotalPrice()}</h2>
      <div className="main-cart">
        {cartItems.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.postImage} alt="" />
            <p>{product.name}</p>
            <p className="cart-price">Price: {product.price} EGP</p>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(product.id, product.quantity)}>
                -
              </button>
              <span>{product.quantity}</span>
              <button onClick={() => increaseQuantity(product.id, product.quantity)}>
                +
              </button>
            </div>
            <button onClick={() => removeFromCart(product.id)} className="remove-btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
