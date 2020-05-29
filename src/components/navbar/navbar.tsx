import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CartContext } from '../../utils/context/context';
import { Nav, Logo, InputContainer, Input } from './styles';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo/Cereno.svg" }) {
        publicURL
      }
    }
  `);

  const { useFilter } = useContext(CartContext);
  const handleInput = e => useFilter(e.target.value);

  return (
    <Nav>
      <div>
        <Logo src={data.placeholderImage.publicURL} alt="Cereno logo" />
      </div>
      <InputContainer>
        <Input placeholder="Buscar" type="text" onChange={handleInput} />
      </InputContainer>
    </Nav>
  );
};
