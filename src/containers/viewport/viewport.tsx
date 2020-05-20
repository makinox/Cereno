import React from 'react';
import { ViewportContainer } from '../../components/';

export default ({ children }) => {
  // const { viewport } = useContext(CartContext);
  return <ViewportContainer>{children}</ViewportContainer>;
};
