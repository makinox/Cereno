import React, { createContext, useState } from 'react';

export const CartContext = createContext({ cart: [], addToCart: null, viewport: 0 });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const viewport = document.getElementsByTagName('body')[0].clientWidth;

  const addToCart = element => {
    setCart([...cart, element]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        viewport,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
