import React from 'react';
import { IconContainer, Icon } from './styles';

export default ({ action }) => (
  <IconContainer onClick={() => action(true)}>
    <Icon />
  </IconContainer>
);
