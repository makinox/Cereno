import styled from "styled-components"
import { IoIosMenu } from "react-icons/io"

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 0.05fr 0.1fr 0.85fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin: 10px;
`

export const Icon = styled(IoIosMenu)`
  display: flex;
  cursor: pointer;
  font-size: 30px;
`

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`

export const InputContainer = styled.div`
  display: flex;
  justify-self: flex-start;
`

export const Input = styled.input`
  width: 55vw;
  border: none;
  margin: 0 2vw;
  padding: 10px;
  border-radius: 10px;
  background-color: #f8f8f8;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`
