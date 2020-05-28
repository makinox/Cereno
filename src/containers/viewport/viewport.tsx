import React, { useContext, useEffect } from 'react';
import { ViewportContainer, LeftContainer, LayoutContainer, Navbar, Cart, ModalContainer } from '../../components/';
import { CartContext } from '../../utils/context/context';
import { Restaurant, Banner } from '..';

export default () => {
  const { viewport, cart } = useContext(CartContext);
  if (typeof window !== `undefined`) {
    const width = document.getElementsByTagName('body')[0].clientWidth;
  }

  return (
    <>
      <ViewportContainer>
        {console.log({ cart: cart.length, width: viewport })}
        <LeftContainer>
          <LayoutContainer>
            <Navbar />
            <Banner />
            <Restaurant />
          </LayoutContainer>
        </LeftContainer>
        {cart.length && viewport > 900 ? <Cart /> : null}
      </ViewportContainer>
      {cart.length && viewport < 900 ? (
        <ModalContainer>
          <Cart />
        </ModalContainer>
      ) : null}
    </>
  );
};
