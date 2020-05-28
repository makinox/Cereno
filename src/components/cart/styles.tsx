import styled from 'styled-components';
import { FaRegClock, FaCompressArrowsAlt } from 'react-icons/fa';

export const CartContainer = styled.section`
  background-color: #fdfdfb;
  border-left: 1px solid #f1f1f1;
  min-width: 330px;
  height: 100vh;
  overflow-y: auto;
`;

export const CartWrapper = styled.div`
  margin: 50px 40px 0 40px;
`;

export const CartTitle = styled.h4`
  margin: 0;
  font-size: 30px;
`;

export const CartTimer = styled.div`
  background-color: #503e9d;
  border-radius: 20px;
  padding: 30px;
  margin-top: 50px;
`;

export const CartTimerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:first-of-type {
    margin-bottom: 30px;
  }

  &:last-of-type {
    margin-top: 30px;
  }
`;

export const CartTimerText = styled.span`
  color: #fff;
  font-size: 14px;
`;

export const CartTimerButton = styled.span`
  cursor: pointer;
  color: #facf5e;
  font-size: 14px;
`;

export const CartTimerIcon = styled(FaRegClock)`
  cursor: pointer;
  color: #facf5e;
  padding: 12px;
  border-radius: 10px;
  background-color: #614c97;
`;

export const CartItemContainer = styled.div`
  margin: 10px 0;
  height: 32vh;
  overflow-y: auto;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`;

export const CartItemImage = styled.img`
  border-radius: 10px;
  width: 80px;
  height: 50px;
`;

export const CartItemText = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;

export const CartItemCost = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #a6a6a6;
`;

export const CartCheckout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  &:last-of-type {
    align-items: flex-start;
    border-top: 1px solid rgb(166, 166, 166);
    margin-bottom: 10px;
    padding-top: 20px;
  }
`;

export const CartCheckoutTotal = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const CartCheckoutTotalMoney = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

export const CartCheckoutCheckoutSelect = styled.span`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 5px 0 25px 0;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const CartCheckoutCheckoutSelectCancel = styled(FaCompressArrowsAlt)`
  font-size: 20px;
`;

export const CartCheckoutCheckoutButton = styled.span`
  cursor: pointer;
  background-color: rgb(251, 214, 97);
  padding: 30px 20px;
  border-radius: 20px;
`;

export const CartCheckoutCheckoutButtonSpan = styled.span`
  padding-right: 10px;
`;
