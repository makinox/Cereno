import React, { useContext, useState } from 'react';
import { ViewportContainer, LeftContainer, LayoutContainer, Navbar, Cart, ModalContainer, FloatIcon } from '../../components/';
import { CartContext } from '../../utils/context/context';
import { Restaurant, Banner } from '..';

export default () => {
  const { viewport, cart } = useContext(CartContext);
  const [active, useActive] = useState(false);

  return (
    <>
      <ViewportContainer>
        {/* {console.log({ cart: cart.length, width: viewport })} */}
        <LeftContainer>
          <LayoutContainer>
            <Navbar />
            <Banner />
            <Restaurant />
          </LayoutContainer>
        </LeftContainer>
        {cart.length && viewport > 900 ? <Cart useActive={null} /> : null}
      </ViewportContainer>
      {active && cart.length && viewport < 900 ? (
        <ModalContainer full={true}>
          <Cart useActive={useActive} />
        </ModalContainer>
      ) : null}
      {!active && cart.length && viewport < 900 ? (
        <ModalContainer full={false}>
          <FloatIcon action={useActive} />
        </ModalContainer>
      ) : null}
    </>
  );
};
