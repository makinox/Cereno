import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 5px 0 25px 0;
  align-items: center;
  justify-content: center;
  background-color: rgb(251, 214, 97);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const Icon = styled(FaShoppingCart)`
  font-size: 25px;
`;
