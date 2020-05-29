import React, { createContext, useState } from 'react';

export const CartContext = createContext({ cart: [], addToCart: null, viewport: 0, filter: '', useFilter: null, deleteCart: null });

export const CartProvider = ({ children }) => {
  const [filter, useFilter] = useState('');
  const [cart, setCart] = useState([]);
  const viewport = document.getElementsByTagName('body')[0].clientWidth;

  const addToCart = element => setCart([...cart, element]);

  const deleteCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        viewport,
        filter,
        useFilter,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
