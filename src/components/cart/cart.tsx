import React, { useContext, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { CartContext } from '../../utils/context/context';
import {
  CartContainer,
  CartTitle,
  CartWrapper,
  CartTimer,
  CartTimerFlex,
  CartTimerText,
  CartTimerButton,
  CartTimerIcon,
  CartItemContainer,
  CartItem,
  CartItemImage,
  CartItemText,
  CartItemCost,
  CartCheckout,
  CartCheckoutTotal,
  CartCheckoutTotalMoney,
  CartCheckoutCheckoutSelect,
  CartCheckoutCheckoutButton,
  CartCheckoutCheckoutButtonSpan,
  CartCheckoutCheckoutSelectCancel,
} from './styles';

export default ({ useActive }) => {
  const { cart, deleteCart } = useContext(CartContext);
  const [direction, useDirection] = useState('Calle 74, Los andines');
  const [time, useTime] = useState('30');
  const total = () => cart.reduce((acc, current) => acc + current.cost, 0);

  const handleDirections = () => {
    const dir = window.prompt('Donde se va a entregar?');
    if (dir) useDirection(dir);
  };

  const handleTime = () => {
    const time = window.prompt('Dentro de cuanto tiempo?');
    if (time) useTime(time);
  };

  const emptyOrder = () => {
    deleteCart();
    window.alert('Muchas gracias por comprar aqui!');
  };

  return (
    <CartContainer>
      <CartWrapper>
        {/* {console.log(cart)} */}
        <CartTitle>My orden 😎</CartTitle>
        <CartTimer>
          <CartTimerFlex>
            <CartTimerText>{direction}</CartTimerText>
            <CartTimerButton onClick={handleDirections}>Edit</CartTimerButton>
          </CartTimerFlex>
          <CartTimerFlex>
            <CartTimerIcon />
            <CartTimerText>{time} min</CartTimerText>
            <CartTimerButton onClick={handleTime}>Choose time</CartTimerButton>
          </CartTimerFlex>
        </CartTimer>
        <CartItemContainer>
          {cart.map((el, idx) => (
            <CartItem key={idx}>
              <CartItemImage src={el.recursive} alt={el.title} />
              <CartItemText>{el.title}</CartItemText>
              <CartItemCost>{el.cost}$</CartItemCost>
            </CartItem>
          ))}
        </CartItemContainer>
        <CartCheckout>
          <CartCheckoutTotal>Total</CartCheckoutTotal>
          <CartCheckoutTotalMoney>$ {total()}</CartCheckoutTotalMoney>
        </CartCheckout>
        <CartCheckout>
          {useActive ? (
            <CartCheckoutCheckoutSelect onClick={() => useActive(false)}>
              <CartCheckoutCheckoutSelectCancel />
            </CartCheckoutCheckoutSelect>
          ) : (
            <div> </div>
          )}
          <CartCheckoutCheckoutButton onClick={emptyOrder}>
            <CartCheckoutCheckoutButtonSpan>Checkout</CartCheckoutCheckoutButtonSpan>
            <FaArrowRight />
          </CartCheckoutCheckoutButton>
        </CartCheckout>
      </CartWrapper>
    </CartContainer>
  );
};
