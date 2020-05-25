import React, { useContext } from 'react';
import { ViewportContainer, LeftContainer, LayoutContainer, Navbar, Banner, Cart } from '../../components/';
import { CartContext } from '../../utils/context/context';
import { Restaurant } from '..';

export default () => {
  const { viewport, cart } = useContext(CartContext);
  return (
    <ViewportContainer>
      {console.log({ viewport, cart: cart.length })}
      <LeftContainer>
        <LayoutContainer>
          <Navbar />
          <Banner />
          <Restaurant />
        </LayoutContainer>
      </LeftContainer>
      {cart.length ? <Cart /> : null}
    </ViewportContainer>
  );
};
