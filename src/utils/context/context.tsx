import React, { createContext, useState } from 'react';

export const CartContext = createContext({ cart: [], addToCart: null, viewport: null, useViewport: null });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {
      img: 'https://i.picsum.photos/id/429/250/150.jpg',
      title: 'Fresas',
      cost: '50$',
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      price: '$$$',
    },
    {
      img: 'https://i.picsum.photos/id/429/250/150.jpg',
      title: 'Fresas',
      cost: '50$',
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      price: '$$',
    },
  ]);
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
