import React, { useContext } from 'react';
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
} from './styles';

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
        <CartItemContainer>
          {cart.map((el, idx) => (
            <CartItem key={idx}>
              <CartItemImage src={el.img} alt={el.title} />
              <CartItemText>1</CartItemText>
              <CartItemText>x</CartItemText>
              <CartItemText>{el.title}</CartItemText>
              <CartItemCost>{el.cost}</CartItemCost>
            </CartItem>
          ))}
        </CartItemContainer>
        <CartCheckout>
          <CartCheckoutTotal>Total</CartCheckoutTotal>
          <CartCheckoutTotalMoney>$25.0</CartCheckoutTotalMoney>
        </CartCheckout>
        <CartCheckout>
          <CartCheckoutCheckoutSelect>
            <span>Persons</span>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </CartCheckoutCheckoutSelect>
          <CartCheckoutCheckoutButton>
            <CartCheckoutCheckoutButtonSpan>Checkout</CartCheckoutCheckoutButtonSpan>
            <FaArrowRight />
          </CartCheckoutCheckoutButton>
        </CartCheckout>
      </CartWrapper>
    </CartContainer>
  );
};
