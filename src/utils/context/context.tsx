import React, { createContext, useState } from 'react';

export const CartContext = createContext({ cart: [], addToCart: null, viewport: null, useViewport: null });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [viewport, useViewport] = useState(false);

  const addToCart = element => {
    setCart([...cart, element]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        viewport,
        useViewport,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
