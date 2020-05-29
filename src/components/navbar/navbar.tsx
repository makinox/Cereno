import React from 'react';
import { Nav, Icon, Title, InputContainer, Input } from './styles';

export default () => (
  <Nav>
    {/* <div>
      <Icon />
    </div> */}
    <div>
      <Title>Cereno</Title>
    </div>
    <InputContainer>
      <Input placeholder="Search" type="text" />
    </InputContainer>
  </Nav>
);
