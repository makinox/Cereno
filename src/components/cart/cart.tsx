import React, { useContext } from 'react';
import { CartContext } from '../../utils/context/context';
import { CartContainer, CartTitle, CartWrapper, CartTimer, CartTimerFlex, CartTimerText, CartTimerButton, CartTimerIcon } from './styles';

export default () => {
  const { cart } = useContext(CartContext);
  return (
    <CartContainer>
      <CartWrapper>
        {console.log(cart)}
        <CartTitle>My order 😎</CartTitle>
        <CartTimer>
          <CartTimerFlex>
            <CartTimerText>Calle 74, Los andines</CartTimerText>
            <CartTimerButton>Edit</CartTimerButton>
          </CartTimerFlex>
          <CartTimerFlex>
            <CartTimerIcon />
            <CartTimerText>35 min</CartTimerText>
            <CartTimerButton>Choose time</CartTimerButton>
          </CartTimerFlex>
        </CartTimer>
      </CartWrapper>
    </CartContainer>
  );
};
