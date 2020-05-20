import React from 'react';
import { SEO, Navbar, Banner, LayoutContainer, Cart } from '../components/';
import { Restaurant, Viewport } from '../containers';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Viewport>
      <section>
        <Navbar />
        <LayoutContainer>
          <Banner />
          <Restaurant />
        </LayoutContainer>
      </section>
      <Cart />
    </Viewport>
  </>
);

export default IndexPage;
