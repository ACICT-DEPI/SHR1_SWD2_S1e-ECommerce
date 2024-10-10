import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Header.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PRODUCTS from "../data"; // Import product list from static data or API

export function Header() {
  // Manage the state of the cart item count
  const [cartCount, setCartCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <header className="header">

<div className="menu-container">
      <button className="menu-button" onClick={toggleMenu}>
           ☰
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/my-account">My Account</Link>
          <Link to="/Cart">My Cart</Link>
          <Link to="/my-favorites">My Favorites</Link>
        </div>
      )}
    </div>
      <div className="search-bar">
        {/* search code */}
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        
        {/* Search field */}
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
    
      </div>

      {/* Middle section with site logo and links */}
      <div className="center-section">
        <Link className="logo" to={'/'}>Enjoy</Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/accessories" className="nav-link">Accessories</Link>
          <Link to="/Laptop" className="nav-link">Laptop</Link>
          <Link to="/sale" className="nav-link">Sale</Link>
        </nav>
      </div>

      {/* Right section with login and number of items in cart */}
      <div className="right-section">
        <Link to="/login" className="login-btn">
          <FontAwesomeIcon icon={faUser} className="user-icon" /> Login
        </Link>
        <div className="cart-icon-container">
          <Link to="/cart" className="cart-link">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            <span className="cart-count">{cartCount}</span> {/* Show number of items in cart */}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
