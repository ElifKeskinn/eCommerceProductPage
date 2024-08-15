import React from 'react';

function Cart({ cart, updateQuantity, removeItem }) {
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-dropdown">
      Your Cart
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>{item.price} $ x {item.quantity}</p>
              <p>Total: {item.price * item.quantity} $</p>
              <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
              <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}
          <h2>Total Cost: {totalCost} $</h2>
          <button className="checkout-button">Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
