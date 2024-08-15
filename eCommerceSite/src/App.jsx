import React, { useState } from 'react';
import Product from './components/Product';
import Header from './components/Header';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const updateQuantity = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Header 
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
      <Product addToCart={addToCart} />
    </div>
  );
}

export default App;
