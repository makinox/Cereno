import React from 'react';
import { SEO, Navbar, Banner, LayoutContainer, Cart, LeftContainer } from '../components/';
import { Restaurant, Viewport } from '../containers';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Viewport>
      <LeftContainer>
        <Navbar />
        <LayoutContainer>
          <Banner />
          <Restaurant />
        </LayoutContainer>
      </LeftContainer>
      <Cart />
    </Viewport>
  </>
);

export default IndexPage;
