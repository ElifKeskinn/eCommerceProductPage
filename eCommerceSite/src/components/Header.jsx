import React, { useState } from 'react';
import Cart from './Cart';

function Header({ cart, updateQuantity, removeItem }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="brand">
        <h1>SNEAKERS</h1>
        <div className="nav-links-container">
          <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="hamburger-menu" onClick={handleNavToggle}>
            &#9776; {/* Hamburger icon */}
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="cart-icon" onClick={handleCartToggle}>
          🛒
          {cart.length > 0 && (
            <span className="cart-count">{cart.length}</span>
          )}
        </div>
        <div className="profile-icon">
          <img src="/images/profilePhoto.png" alt="Profile" />
        </div>
        {isCartOpen && (
          <div className="cart-dropdown">
            <Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
