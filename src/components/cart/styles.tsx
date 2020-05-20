import styled from 'styled-components';
import { FaRegClock } from 'react-icons/fa';

export const CartContainer = styled.section`
  background-color: #fdfdfb;
  border-left: 1px solid #f1f1f1;
  width: 100%;
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
