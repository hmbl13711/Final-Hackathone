// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    if (!cartItems.find((cartItem) => cartItem.id === item.id)) {
      setCartItems([...cartItems, item]);
    }
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// export const useCart = () => useContext(CartContext);
export function useCart() {
    return useContext(CartContext);
  }