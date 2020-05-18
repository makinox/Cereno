import React from "react"
import { SEO, Navbar, Banner, LayoutContainer } from "../components/"
import { Restaurant } from "../containers"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Navbar />
    <LayoutContainer>
      <Banner />
      <Restaurant />
    </LayoutContainer>
  </>
)

export default IndexPage
