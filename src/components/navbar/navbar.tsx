import React from 'react';
import { Nav, Logo, InputContainer, Input } from './styles';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo/Cereno.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <Nav>
      {/* {console.log(data.placeholderImage.publicURL)} */}
      <div>
        <Logo src={data.placeholderImage.publicURL} alt="Cereno logo" />
      </div>
      <InputContainer>
        <Input placeholder="Search" type="text" />
      </InputContainer>
    </Nav>
  );
};
