import styled from 'styled-components';
import { IoIosMenu } from 'react-icons/io';

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 9fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 10px;
`;

export const Icon = styled(IoIosMenu)`
  display: flex;
  cursor: pointer;
  font-size: 30px;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 110px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-self: flex-start;
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  margin: 0 2vw;
  padding: 10px;
  border-radius: 10px;
  background-color: #f8f8f8;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;
